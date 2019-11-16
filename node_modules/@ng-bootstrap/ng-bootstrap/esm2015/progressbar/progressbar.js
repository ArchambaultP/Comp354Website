/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { getValueInRange, isNumber } from '../util/util';
import { NgbProgressbarConfig } from './progressbar-config';
/**
 * A directive that provides feedback on the progress of a workflow or an action.
 */
export class NgbProgressbar {
    /**
     * @param {?} config
     */
    constructor(config) {
        /**
         * The current value for the progress bar.
         *
         * Should be in the `[0, max]` range.
         */
        this.value = 0;
        this.max = config.max;
        this.animated = config.animated;
        this.striped = config.striped;
        this.type = config.type;
        this.showValue = config.showValue;
        this.height = config.height;
    }
    /**
     * The maximal value to be displayed in the progress bar.
     *
     * Should be a positive number. Will default to 100 otherwise.
     * @param {?} max
     * @return {?}
     */
    set max(max) {
        this._max = !isNumber(max) || max <= 0 ? 100 : max;
    }
    /**
     * @return {?}
     */
    get max() { return this._max; }
    /**
     * @return {?}
     */
    getValue() { return getValueInRange(this.value, this.max); }
    /**
     * @return {?}
     */
    getPercentValue() { return 100 * this.getValue() / this.max; }
}
NgbProgressbar.decorators = [
    { type: Component, args: [{
                selector: 'ngb-progressbar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="progress" [style.height]="height">
      <div class="progress-bar{{type ? ' bg-' + type : ''}}{{animated ? ' progress-bar-animated' : ''}}{{striped ?
    ' progress-bar-striped' : ''}}" role="progressbar" [style.width.%]="getPercentValue()"
    [attr.aria-valuenow]="getValue()" aria-valuemin="0" [attr.aria-valuemax]="max">
        <span *ngIf="showValue" i18n="@@ngb.progressbar.value">{{getPercentValue()}}%</span><ng-content></ng-content>
      </div>
    </div>
  `
            }] }
];
/** @nocollapse */
NgbProgressbar.ctorParameters = () => [
    { type: NgbProgressbarConfig }
];
NgbProgressbar.propDecorators = {
    max: [{ type: Input }],
    animated: [{ type: Input }],
    striped: [{ type: Input }],
    showValue: [{ type: Input }],
    type: [{ type: Input }],
    value: [{ type: Input }],
    height: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgbProgressbar.prototype._max;
    /**
     * If `true`, the stripes on the progress bar are animated.
     *
     * Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.
     * @type {?}
     */
    NgbProgressbar.prototype.animated;
    /**
     * If `true`, the progress bars will be displayed as striped.
     * @type {?}
     */
    NgbProgressbar.prototype.striped;
    /**
     * If `true`, the current percentage will be shown in the `xx%` format.
     * @type {?}
     */
    NgbProgressbar.prototype.showValue;
    /**
     * The type of the progress bar.
     *
     * Supports types based on Bootstrap background color variants, like:
     *  `"success"`, `"info"`, `"warning"`, `"danger"`, `"primary"`, `"secondary"`, `"dark"` and so on.
     * @type {?}
     */
    NgbProgressbar.prototype.type;
    /**
     * The current value for the progress bar.
     *
     * Should be in the `[0, max]` range.
     * @type {?}
     */
    NgbProgressbar.prototype.value;
    /**
     * The height of the progress bar.
     *
     * Accepts any valid CSS height values, ex. `"2rem"`
     * @type {?}
     */
    NgbProgressbar.prototype.height;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbInByb2dyZXNzYmFyL3Byb2dyZXNzYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUMsZUFBZSxFQUFFLFFBQVEsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN2RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQWtCMUQsTUFBTSxPQUFPLGNBQWM7Ozs7SUFzRHpCLFlBQVksTUFBNEI7Ozs7OztRQVQvQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBVWpCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7O0lBckRELElBQ0ksR0FBRyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsSUFBSSxHQUFHLEtBQWEsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7OztJQWtEdkMsUUFBUSxLQUFLLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztJQUU1RCxlQUFlLEtBQUssT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7WUE5RS9ELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2FBQ0Y7Ozs7WUFqQk8sb0JBQW9COzs7a0JBMEJ6QixLQUFLO3VCQVlMLEtBQUs7c0JBS0wsS0FBSzt3QkFLTCxLQUFLO21CQVFMLEtBQUs7b0JBT0wsS0FBSztxQkFPTCxLQUFLOzs7Ozs7O0lBbkROLDhCQUFxQjs7Ozs7OztJQW1CckIsa0NBQTJCOzs7OztJQUszQixpQ0FBMEI7Ozs7O0lBSzFCLG1DQUE0Qjs7Ozs7Ozs7SUFRNUIsOEJBQXNCOzs7Ozs7O0lBT3RCLCtCQUFtQjs7Ozs7OztJQU9uQixnQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Z2V0VmFsdWVJblJhbmdlLCBpc051bWJlcn0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7TmdiUHJvZ3Jlc3NiYXJDb25maWd9IGZyb20gJy4vcHJvZ3Jlc3NiYXItY29uZmlnJztcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHByb3ZpZGVzIGZlZWRiYWNrIG9uIHRoZSBwcm9ncmVzcyBvZiBhIHdvcmtmbG93IG9yIGFuIGFjdGlvbi5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdiLXByb2dyZXNzYmFyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCIgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJ7e3R5cGUgPyAnIGJnLScgKyB0eXBlIDogJyd9fXt7YW5pbWF0ZWQgPyAnIHByb2dyZXNzLWJhci1hbmltYXRlZCcgOiAnJ319e3tzdHJpcGVkID9cbiAgICAnIHByb2dyZXNzLWJhci1zdHJpcGVkJyA6ICcnfX1cIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBbc3R5bGUud2lkdGguJV09XCJnZXRQZXJjZW50VmFsdWUoKVwiXG4gICAgW2F0dHIuYXJpYS12YWx1ZW5vd109XCJnZXRWYWx1ZSgpXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBbYXR0ci5hcmlhLXZhbHVlbWF4XT1cIm1heFwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInNob3dWYWx1ZVwiIGkxOG49XCJAQG5nYi5wcm9ncmVzc2Jhci52YWx1ZVwiPnt7Z2V0UGVyY2VudFZhbHVlKCl9fSU8L3NwYW4+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTmdiUHJvZ3Jlc3NiYXIge1xuICBwcml2YXRlIF9tYXg6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIG1heGltYWwgdmFsdWUgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAqXG4gICAqIFNob3VsZCBiZSBhIHBvc2l0aXZlIG51bWJlci4gV2lsbCBkZWZhdWx0IHRvIDEwMCBvdGhlcndpc2UuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbWF4KG1heDogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4ID0gIWlzTnVtYmVyKG1heCkgfHwgbWF4IDw9IDAgPyAxMDAgOiBtYXg7XG4gIH1cblxuICBnZXQgbWF4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9tYXg7IH1cblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgc3RyaXBlcyBvbiB0aGUgcHJvZ3Jlc3MgYmFyIGFyZSBhbmltYXRlZC5cbiAgICpcbiAgICogVGFrZXMgZWZmZWN0IG9ubHkgZm9yIGJyb3dzZXJzIHN1cHBvcnRpbmcgQ1NTMyBhbmltYXRpb25zLCBhbmQgaWYgYHN0cmlwZWRgIGlzIGB0cnVlYC5cbiAgICovXG4gIEBJbnB1dCgpIGFuaW1hdGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBwcm9ncmVzcyBiYXJzIHdpbGwgYmUgZGlzcGxheWVkIGFzIHN0cmlwZWQuXG4gICAqL1xuICBASW5wdXQoKSBzdHJpcGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjdXJyZW50IHBlcmNlbnRhZ2Ugd2lsbCBiZSBzaG93biBpbiB0aGUgYHh4JWAgZm9ybWF0LlxuICAgKi9cbiAgQElucHV0KCkgc2hvd1ZhbHVlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyLlxuICAgKlxuICAgKiBTdXBwb3J0cyB0eXBlcyBiYXNlZCBvbiBCb290c3RyYXAgYmFja2dyb3VuZCBjb2xvciB2YXJpYW50cywgbGlrZTpcbiAgICogIGBcInN1Y2Nlc3NcImAsIGBcImluZm9cImAsIGBcIndhcm5pbmdcImAsIGBcImRhbmdlclwiYCwgYFwicHJpbWFyeVwiYCwgYFwic2Vjb25kYXJ5XCJgLCBgXCJkYXJrXCJgIGFuZCBzbyBvbi5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmFsdWUgZm9yIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAqXG4gICAqIFNob3VsZCBiZSBpbiB0aGUgYFswLCBtYXhdYCByYW5nZS5cbiAgICovXG4gIEBJbnB1dCgpIHZhbHVlID0gMDtcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgcHJvZ3Jlc3MgYmFyLlxuICAgKlxuICAgKiBBY2NlcHRzIGFueSB2YWxpZCBDU1MgaGVpZ2h0IHZhbHVlcywgZXguIGBcIjJyZW1cImBcbiAgICovXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTmdiUHJvZ3Jlc3NiYXJDb25maWcpIHtcbiAgICB0aGlzLm1heCA9IGNvbmZpZy5tYXg7XG4gICAgdGhpcy5hbmltYXRlZCA9IGNvbmZpZy5hbmltYXRlZDtcbiAgICB0aGlzLnN0cmlwZWQgPSBjb25maWcuc3RyaXBlZDtcbiAgICB0aGlzLnR5cGUgPSBjb25maWcudHlwZTtcbiAgICB0aGlzLnNob3dWYWx1ZSA9IGNvbmZpZy5zaG93VmFsdWU7XG4gICAgdGhpcy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiBnZXRWYWx1ZUluUmFuZ2UodGhpcy52YWx1ZSwgdGhpcy5tYXgpOyB9XG5cbiAgZ2V0UGVyY2VudFZhbHVlKCkgeyByZXR1cm4gMTAwICogdGhpcy5nZXRWYWx1ZSgpIC8gdGhpcy5tYXg7IH1cbn1cbiJdfQ==