import React, { useEffect, useState } from "react";

type Props = {
  sampleProp ?: any;
}

export const SettingPage : React.FC <Props> = ({ sampleProp }) => {

  // ___ state ___ ___ ___ ___ ___
  const [ sampleState, setSampleState ] = useState<string>('This is SampleState');

  // ___ use effect ___ ___ ___ ___ ___
  useEffect( () => { console.log(sampleState) }, [ sampleState ] );

  // ___ event handler ___ ___ ___ ___ ___
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
  };

  // ___ method ___ ___ ___ ___ ___
  const test = () => {
    console.log('test');
  }

  return (
    <div>
      <h2>{ SettingPage.name }</h2>
      <h3>delete stored information</h3>
      <h3>version notation</h3>
    </div>
  );
};

export default SettingPage