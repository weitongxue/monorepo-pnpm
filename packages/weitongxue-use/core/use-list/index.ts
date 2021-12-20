
import { ref, UnwrapRef, Ref } from 'vue-demi';
import { useRouter } from 'vue-router';
import { get, cloneDeep } from 'lodash-es';

interface IResponse<T = any> {
  data: T;
  successful: boolean;
  message?: string;
  code?: string;
}

interface UseListConfig<T = any, P = any> {
  // 是否刷新列表
  isUpdateRouterUrl?: boolean;
  request: {
    /**
     * 请求列表方法
     */
    api: any;
    /**
     * 请求参数
     */
    params?: P;
    pageNumKey?: string;
    pageSizeKey?: string;
    /**
     * 接口响应数据 key
     */
    handleParams?: (params: P) => P;
    /**
     * 校验函数返回true 往下执行
     */
    handleValidate?: (params: any) => boolean;
    /**
     * 自定义重置方法
     */
    handleCustomReset?: (params: P, defaultParams: P) => P;
    /**
     * 重置请求地址
     */
    resetApi?: () => any;
  };
  response?: {
    /**
     * 列表数据 默认 data.list
     * 例： 响应数据为 { data: { list: [] } } 则传递 data.list;
     */
    tableDataKey?: string;
    /**
     * 总条数 默认 data.total
     * 例： 响应数据为 { data: { list: [], total: 0 } } 则传递 data.total;
     */
    totalKey?: string;
    handleResponseData?: (list: T[], res?: IResponse) => T[];
  };
}

const defaultResponseConfig = {
  tableDataKey: 'data.list',
  totalKey: 'data.total',
};

interface IReturns<T, P, U> {
  params: Ref<UnwrapRef<P>>;
  resData: Ref<UnwrapRef<U>>;
  tableData: Ref<UnwrapRef<T[]>>;
  tableTotal: Ref<number>;
  tableLoading: Ref<boolean>;
  handleSearch: (pageNum?: number) => any;
  handleReset: () => any;
  handleSizeChange: (pageNum: number) => any;
  handleCurrentChange: (pageNum: number) => any;
}

export function useList<T = any, P = any, U = any>(
  config: UseListConfig<T, P>
): IReturns<T, P, U> {
  const { params: requestParams = {} } = config.request;
  const cacheConfig = cloneDeep(config);
  cacheConfig.response = Object.assign(
    {},
    defaultResponseConfig,
    cacheConfig.response || {}
  );

  const { isUpdateRouterUrl } = cacheConfig;

  const {
    pageNumKey = 'pageNum',
    pageSizeKey = 'pageSize',
    handleParams,
    handleValidate,
    handleCustomReset,
    resetApi,
  } = cacheConfig.request;
  let { api } = cacheConfig.request;

  const { tableDataKey, totalKey, handleResponseData } = cacheConfig.response;

  const updateRouteUrl = (query: any = {}) => {
    const router = useRouter();
    query = Object.assign({}, query);
    // 调用 this.$router.replace 路由重复时，报 Navigation Duplicated
    query.t = +new Date();
    // 编码中文
    Object.keys(query).forEach((key) => {
      const value = query[key];
      if (typeof value === 'object') {
        query[key] = encodeURIComponent(JSON.stringify(value));
      } else {
        query[key] = value ? encodeURIComponent(value) : '';
      }
    });
    router.replace({
      name: router.currentRoute.value.name!,
      query,
    });
  };

  const tableData = ref<T[]>([]);
  const tableTotal = ref(0);
  const tableLoading = ref(false);
  const params = ref(cloneDeep(requestParams) as P);
  const resData = ref<U>({} as U);
  /**
   * 列表查询
   */
  const handleSearch = (pageNum = 1) => {
    if (pageNumKey in (params.value as any)) {
      (params.value as any)[pageNumKey] = pageNum;
    }

    let apiParams = Object.assign({}, params.value) as P;

    if (handleValidate && !handleValidate(params.value)) {
      return null;
    }

    if (handleParams) {
      apiParams = handleParams(cloneDeep(params.value) as P);
    }

    if (resetApi) {
      api = resetApi();
    }
    tableLoading.value = true;
    api(apiParams)
      .then((response: any) => {
        const res = response;
        resData.value = cloneDeep(res.data);
        // 更新路由url
        if (isUpdateRouterUrl) {
          updateRouteUrl(params.value as any);
        }
        let list = get(res, tableDataKey!);
        tableTotal.value = get(res, totalKey!);
        if (handleResponseData) {
          list = handleResponseData(list, res);
        }
        tableData.value = list;
        return Promise.resolve(res);
      })
      .catch((err: any) => {
        if (err && err.isCancel) {
          setTimeout(() => {
            tableLoading.value = true;
          });
        }
        return Promise.reject(err);
      })
      .finally(() => {
        tableLoading.value = false;
      });
  };

  /**
   * 重置查询参数
   */
  const handleReset = () => {
    if (handleCustomReset) {
      params.value = handleCustomReset(
        params.value as P,
        cloneDeep(requestParams) as P
      ) as UnwrapRef<P>;
    } else {
      params.value = cloneDeep(requestParams) as UnwrapRef<P>;
    }
    return handleSearch();
  };
  /**
   * 切换分页大小 刷新列表
   */
  const handleSizeChange = (pageSize: number) => {
    if (pageSizeKey in (params.value as any)) {
      (params.value as any)[pageSizeKey] = pageSize;
    }
    return handleSearch(1);
  };
  /**
   * 切换页码 刷新列表
   */
  const handleCurrentChange = (pageNum: number) => handleSearch(pageNum);

  return {
    params,
    resData,
    tableData,
    tableTotal,
    tableLoading,
    handleSearch,
    handleReset,
    handleSizeChange,
    handleCurrentChange,
  };
}
