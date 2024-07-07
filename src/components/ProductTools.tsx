import React from "react";
import { useIntl } from "react-intl";
import ProductDescription, { ProductGenerationProps } from "./editors/ProductDescription";
import {
  updateAudienceValue,
  updateBusinessNameValue,
  updateKeywordValue,
  updateFeatureValue,
} from "../slices/fieldsValue";
import { JSX } from "react/jsx-runtime";


export const ProductDescriptionTool = (props) => {
  const intl = useIntl();
  const brandName: string = intl.formatMessage({ id: "A005" });
  const brandNamebusiness: string = intl.formatMessage({ id: "A006" });
  const audiencelabel: string = intl.formatMessage({ id: "A007" });
  const audienceplaceholder: string = intl.formatMessage({ id: "A008" });

  const keywordslabel: string = intl.formatMessage({ id: "A009" });
  const keywordsplaceholder: string = intl.formatMessage({ id: "A0010" });

  const Featurelabel: string = intl.formatMessage({ id: "A0011" });
  const Featureplaceholder: string = intl.formatMessage({ id: "A0012" });

  return (
    <ProductDescription
      mainPlaceholder={intl.formatMessage({ id: "A002" })}
      generateButtonName={intl.formatMessage({ id: "A003" })}
      headerTitle={intl.formatMessage({ id: "A004" })}
      labelsLists={[
        {
          label: brandName,
          placeholder: brandNamebusiness,
          dispatcher: updateBusinessNameValue,
        },
        {
          label: audiencelabel,
          placeholder: audienceplaceholder,
          dispatcher: updateAudienceValue,
        },
        {
          label: keywordslabel,
          placeholder: keywordsplaceholder,
          dispatcher: updateKeywordValue,
        },
        {
          label: Featurelabel,
          placeholder: Featureplaceholder,
          dispatcher: updateFeatureValue,
        },
      ]}
      {...props}
    />
  );
};

export const ProductTaglineTool = (props: JSX.IntrinsicAttributes & ProductGenerationProps) => {
  const intl = useIntl();
  const keywordslabel: string = intl.formatMessage({ id: "A009" });
  const keywordsplaceholder: string = intl.formatMessage({ id: "A0010" });

  return (
    <ProductDescription
      labelsLists={[
        {
          label: keywordslabel,
          placeholder: keywordsplaceholder,
          dispatcher: updateKeywordValue,
        },
      ]}
      {...props}
    />
  );
};

export const AdsGoogleTool = (props) => {
  const intl = useIntl();
  const brandName: string = intl.formatMessage({ id: "A005" });
  const brandNamebusiness: string = intl.formatMessage({ id: "A006" });

  const keywordslabel: string = intl.formatMessage({ id: "A009" });
  const keywordsplaceholder: string = intl.formatMessage({ id: "A0010" });

  const Featurelabel: string = intl.formatMessage({ id: "A0011" });
  const Featureplaceholder: string = intl.formatMessage({ id: "A0012" });

  return (
    <ProductDescription
      generateButtonName={intl.formatMessage({ id: "A003" })}
      labelsLists={[
        {
          label: brandName,
          placeholder: brandNamebusiness,
          dispatcher: updateBusinessNameValue,
        },
        {
          label: keywordslabel,
          placeholder: keywordsplaceholder,
          dispatcher: updateKeywordValue,
        },
        {
          label: Featurelabel,
          placeholder: Featureplaceholder,
          dispatcher: updateFeatureValue,
        },
      ]}
      {...props}
    />
  );
};

{
  /* <ProductDescription
label={<FormattedMessage id='L12319' />}
headerTitle={<FormattedMessage id='T09819' />}
description={<FormattedMessage id='D76519' />}
example={<FormattedMessage id='E56719' />}
instructHelp={<FormattedMessage id='H43219' />}
generateButtonName={<FormattedMessage id='N78919' />}
productType='25'
path='/productdescription'
toneTextField={true}
labelsLists={[]}
/> */
}
