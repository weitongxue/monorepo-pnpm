import { ConfigProviderContext } from 'element-plus';
import { TgButtonProps } from '../../tg-button';
import { TgImageProps } from '../../tg-image';
import { TgImageViewerProps } from '../../tg-image-viewer';
import { TgDescriptionsProps } from '../../tg-descriptions';
import { TgDescriptionsItemProps } from '../../tg-descriptions-item';
import { TgPaginationProps } from '../../tg-pagination';
import { TgBadgeProps } from '../../tg-badge';
import { TgFormProps } from '../../tg-form';
import { TgFormItemProps } from '../../tg-form-item';
import { TgSwitchProps } from '../../tg-switch';
import { TgDatePickerProps } from '../../tg-date-picker';
import { TgTimepickerProps } from '../../tg-time-picker';
import { TgDateTimePickerProps } from '../../tg-date-time-picker';
import { TgDrawerProps } from '../../tg-drawer';
import { TgCascaderProps } from '../../tg-cascader';
import { TgDialogProps } from '../../tg-dialog';
import { TgTagProps } from '../../tg-tag';
import {
  TgCheckboxButtonProps,
  TgCheckboxGroupProps,
  TgCheckboxProps,
} from '../../tg-checkbox';
import { TgTransferProps } from '../../tg-transfer';
import {
  TgSelectProps,
  TgOptionProps,
  TgOptionGroupProps,
} from '../../tg-select';
import { TgRadioProps } from '../../tg-radio';
import { TgRadioGroupProps } from '../../tg-radio-group';
import { TgRadioButtonProps } from '../../tg-radio-button';
import { TgUploadProps } from '../../tg-upload';
import { TgDropdownProps } from '../../tg-dropdown';
import { TgDropdownMenuProps } from '../../tg-dropdown-menu';
import { TgDropdownItemProps } from '../../tg-dropdown-item';
import { TgTooltipProps } from '../../tg-tooltip';
import { TgTimelineItemProps } from '../../tg-timeline-item';
import { TgTabsProps } from '../../tg-tabs';
import { TgTabPaneProps } from '../../tg-tab-pane';
import { TgTimeSelectProps } from '../../tg-time-select';
import { TgCardProps } from '../../tg-card';
import {
  TgAsideProps,
  TgFooterProps,
  TgHeaderProps,
  TgContainerProps,
} from '../../tg-container';
import { TgIconProps } from '../../tg-icon';
import { TgInputNumberProps } from '../../tg-input-number';
import { TgColProps } from '../../tg-col';
import { TgRowProps } from '../../tg-row';
import { TgInputProps } from '../../tg-input';
import { TgTreeProps } from '../../tg-tree';
import { TgMenuProps } from '../../tg-menu';
import { TgSubMenuProps } from '../../tg-sub-menu';
import { TgMenuItemGroupProps } from '../../tg-menu-item-group';
import { TgMenuItemProps } from '../../tg-menu-item';
import { TgTableProps } from '../../tg-table';
import { TgTableColumnProps } from '../../tg-table-column';
import { TgSliderProps } from '../../tg-slider';
import { TgoResponsiveRowProps } from '../../tgo-responsive-row';
import Request from 'packages/tiangong-http/dist/Request';

export interface TGConfigProviderPluginOption {
  httpService?: Request;
  global?: Partial<ConfigProviderContext>;
  tgButton?: Partial<TgButtonProps>;
  tgImage?: Partial<TgImageProps>;
  tgImageViewer?: Partial<TgImageViewerProps>;
  tgDescriptions?: Partial<TgDescriptionsProps>;
  tgDescriptionsItem?: Partial<TgDescriptionsItemProps>;
  tgPagination?: Partial<TgPaginationProps>;
  tgBadge?: Partial<TgBadgeProps>;
  tgForm?: Partial<TgFormProps>;
  tgFormItem?: Partial<TgFormItemProps>;
  tgSwitch?: Partial<TgSwitchProps>;
  tgDatePicker?: Partial<TgDatePickerProps>;
  tgTimePicker?: Partial<TgTimepickerProps>;
  TgDateTimePickerProps?: Partial<TgDateTimePickerProps>;
  tgDrawer?: Partial<TgDrawerProps>;
  tgCascader?: Partial<TgCascaderProps>;
  tgCascaderPanel?: Partial<TgCascaderProps>;
  tgDialog?: Partial<TgDialogProps>;
  TgCheckbox?: Partial<TgCheckboxProps>;
  TgCheckboxGroup?: Partial<TgCheckboxGroupProps>;
  TgCheckboxButton?: Partial<TgCheckboxButtonProps>;
  TgTransfer?: Partial<TgTransferProps>;
  tgSelect?: Partial<TgSelectProps>;
  tgOption?: Partial<TgOptionProps>;
  tgOptionGroup?: Partial<TgOptionGroupProps>;
  tgRadio?: Partial<TgRadioProps>;
  tgRadioGroup?: Partial<TgRadioGroupProps>;
  tgRadioButton?: Partial<TgRadioButtonProps>;
  tgUpload?: Partial<TgUploadProps>;
  tgDropdown?: Partial<TgDropdownProps>;
  tgDropdownMenu?: Partial<TgDropdownMenuProps>;
  tgDropdownItem?: Partial<TgDropdownItemProps>;
  tgTag?: Partial<TgTagProps>;
  tgTooltip?: Partial<TgTooltipProps>;
  tgTimelineItem?: Partial<TgTimelineItemProps>;
  tgTabs?: Partial<TgTabsProps>;
  tgTabPane?: Partial<TgTabPaneProps>;
  tgTimeSelect?: Partial<TgTimeSelectProps>;
  tgCard?: Partial<TgCardProps>;
  tgAside?: Partial<TgAsideProps>;
  tgFooter?: Partial<TgFooterProps>;
  tgHeader?: Partial<TgHeaderProps>;
  tgContainer?: Partial<TgContainerProps>;
  tgIcon?: Partial<TgIconProps>;
  tgInputNumber?: Partial<TgInputNumberProps>;
  tgInput?: Partial<TgInputProps>;
  tgCol?: Partial<TgColProps>;
  tgRow?: Partial<TgRowProps>;
  tgTree?: Partial<TgTreeProps>;
  tgMenu?: Partial<TgMenuProps>;
  tgSubMenu?: Partial<TgSubMenuProps>;
  tgMenuItem?: Partial<TgMenuItemProps>;
  tgMenuItemGroup?: Partial<TgMenuItemGroupProps>;
  tgTable?: Partial<TgTableProps>;
  tgTableColumn?: Partial<TgTableColumnProps>;
  tgSlider?: Partial<TgSliderProps>;
  tgoResponsiveRow?: Partial<TgoResponsiveRowProps>;
}
