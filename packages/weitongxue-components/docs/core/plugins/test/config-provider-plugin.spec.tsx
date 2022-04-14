import { mount } from '@vue/test-utils';
import { configProviderPlugin, configProviderKey } from '..';
import { TGConfigProviderPluginOption } from '../type';
import { inject, ref } from 'vue';
import zhCn from '../../lang/zh-cn';
import { configProviderContextKey, ElPagination } from 'element-plus';

describe('config provider plugin', () => {
  // 校验插件注入的值与组件内拿到的值相等
  it('should returns the same value', () => {
    const configProviderPluginOptions: TGConfigProviderPluginOption = {
      tgButton: { size: 'small' },
      global: { locale: zhCn },
    };
    const wrapper = mount(
      {
        template: `{{ options }}{{ elementOptions }}`,
        setup() {
          const options = inject(configProviderKey);
          const elementOptions = inject(configProviderContextKey);
          return {
            options: JSON.stringify(options),
            elementOptions: JSON.stringify(elementOptions?.value),
          };
        },
      },
      {
        global: {
          plugins: [[configProviderPlugin, configProviderPluginOptions]],
        },
      }
    );
    expect(wrapper.html()).toEqual(
      `${JSON.stringify(configProviderPluginOptions)}${JSON.stringify(
        configProviderPluginOptions.global
      )}`
    );
  });

  // 2. 语言参数配置， 验证语言包是否生效。
  it('should language pack be zh-cn', () => {
    const configProviderPluginOptions: TGConfigProviderPluginOption = {
      tgButton: { size: 'small' },
      global: { locale: zhCn },
    };
    const wrapper = mount(
      {
        template: `
        <el-pagination
          v-model:currentPage="value"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, prev, pager, next, jumper"
          :total="1000"
        ></el-pagination>
      `,
        components: { ElPagination },
        setup() {
          const value = ref(1);
          return {
            value,
          };
        },
      },
      {
        global: {
          plugins: [[configProviderPlugin, configProviderPluginOptions]],
        },
      }
    );
    expect(wrapper.find('.el-pagination__total').html()).toContain('共');
  });
});
