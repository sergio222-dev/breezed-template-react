import React, { FunctionComponent } from 'react';

interface OwnProps {
  paddingTop?: number;
  paddingBottom?: number;
}

type Props = OwnProps;

const SectionTemplate: FunctionComponent<Props> = ({children, paddingBottom, paddingTop}) => {

  return (
    <section className={'section-template'}>
      {children}
      <style jsx>{`
        .section-template {
          padding-top: ${paddingTop || '0'}px;
          padding-bottom: ${paddingBottom || '0'}px;
        }
      `}</style>
    </section>
  );
};

export default SectionTemplate;
