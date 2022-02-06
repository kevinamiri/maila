import React from "react";
import { useIntl } from "react-intl";
import ProductDescription from "./editors/ProductDescription";
import {
  updateAudienceValue,
  updateBusinessNameValue,
  updateKeywordValue,
  updateFeatureValue,
} from "../slices/fieldsValue";
/**
 *
 * In order to handle the language and avoid typing errors,
 * we put the component in the wtitingtools component
 */

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

export const ProductTaglineTool = (props) => {
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
