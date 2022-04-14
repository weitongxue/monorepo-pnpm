<script setup>
import DemoPlayground from '../../components/DemoPlayground.vue';
import Basic from './demo/basic.vue';
import Config from './demo/config.vue';
import Multiple from './demo/multiple.vue';
import Custom from './demo/custom.vue';
import CustomSlot from './demo/slot.vue';
import Clear from './demo/clear.vue';
</script>

# w-search-input 远程搜索下拉选择组件
基础用法, 无需配置（数据接口就是{ value: string; label: string }[]） <demo-playground> <basic /> </demo-playground>

配置用法（接口数据返回：{ data: { total: 3, list: [{ userCode: string; userName: string; }] }}） <demo-playground> <config /> </demo-playground>

多选用法 <demo-playground> <multiple /> </demo-playground>

自定义输出 option 用法 <demo-playground> <custom /> </demo-playground>

自定义模版用法 <demo-playground> <CustomSlot></CustomSlot> </demo-playground>

搜索条件改变，清空上一次 option（清空就必须要保证 labelKey 和 valueKey 一致，因为 option 清空，会导致回显有问题） <demo-playground> <clear /> </demo-playground>

