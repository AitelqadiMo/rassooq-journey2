/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PromoCodeUpdateFormInputValues = {
    code?: string;
    description?: string;
    discountType?: string;
    discountValue?: number;
    minPurchaseAmount?: number;
    maxDiscountAmount?: number;
    usageLimit?: number;
    usageLimitPerUser?: number;
    validFrom?: string;
    validUntil?: string;
    isActive?: boolean;
    applicableToCategories?: string[];
    applicableToProducts?: string[];
    isPlusMembersOnly?: boolean;
    isFirstOrderOnly?: boolean;
    timesUsed?: number;
    createdAt?: string;
    updatedAt?: string;
};
export declare type PromoCodeUpdateFormValidationValues = {
    code?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    discountType?: ValidationFunction<string>;
    discountValue?: ValidationFunction<number>;
    minPurchaseAmount?: ValidationFunction<number>;
    maxDiscountAmount?: ValidationFunction<number>;
    usageLimit?: ValidationFunction<number>;
    usageLimitPerUser?: ValidationFunction<number>;
    validFrom?: ValidationFunction<string>;
    validUntil?: ValidationFunction<string>;
    isActive?: ValidationFunction<boolean>;
    applicableToCategories?: ValidationFunction<string>;
    applicableToProducts?: ValidationFunction<string>;
    isPlusMembersOnly?: ValidationFunction<boolean>;
    isFirstOrderOnly?: ValidationFunction<boolean>;
    timesUsed?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PromoCodeUpdateFormOverridesProps = {
    PromoCodeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    discountType?: PrimitiveOverrideProps<SelectFieldProps>;
    discountValue?: PrimitiveOverrideProps<TextFieldProps>;
    minPurchaseAmount?: PrimitiveOverrideProps<TextFieldProps>;
    maxDiscountAmount?: PrimitiveOverrideProps<TextFieldProps>;
    usageLimit?: PrimitiveOverrideProps<TextFieldProps>;
    usageLimitPerUser?: PrimitiveOverrideProps<TextFieldProps>;
    validFrom?: PrimitiveOverrideProps<TextFieldProps>;
    validUntil?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    applicableToCategories?: PrimitiveOverrideProps<TextFieldProps>;
    applicableToProducts?: PrimitiveOverrideProps<TextFieldProps>;
    isPlusMembersOnly?: PrimitiveOverrideProps<SwitchFieldProps>;
    isFirstOrderOnly?: PrimitiveOverrideProps<SwitchFieldProps>;
    timesUsed?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PromoCodeUpdateFormProps = React.PropsWithChildren<{
    overrides?: PromoCodeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    promoCode?: any;
    onSubmit?: (fields: PromoCodeUpdateFormInputValues) => PromoCodeUpdateFormInputValues;
    onSuccess?: (fields: PromoCodeUpdateFormInputValues) => void;
    onError?: (fields: PromoCodeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PromoCodeUpdateFormInputValues) => PromoCodeUpdateFormInputValues;
    onValidate?: PromoCodeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PromoCodeUpdateForm(props: PromoCodeUpdateFormProps): React.ReactElement;
