import { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';

const StyledSwitch = styled.div`
  position: relative;
  width: 75px;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  @media screen and (max-width: 1440px) {
    transform: scale(0.9);
  }
  @media screen and (max-width: 1024px) {
    transform: scale(0.825);
  }
  @media screen and (max-width: 375px) {
    transform: scale(0.75);
  }
  .checkbox {
    display: none;
  }
  .label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 0 solid #bbb;
    border-radius: 20px;
    margin: 0;
  }
  .inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
    &:before,
    &:after {
      display: block;
      float: left;
      width: 50%;
      height: 34px;
      padding: 0;
      line-height: 2.3rem;
      font-size: 0.7rem;
      color: white;
      font-weight: 800;
      box-sizing: border-box;
    }
    &:before {
      content: 'Light';
      text-transform: uppercase;
      padding-left: 10px;
      background-color: hsl(209, 23%, 22%);
      color: #fff;
    }
  }

  .inner:after {
    content: 'Dark';
    text-transform: uppercase;
    padding-right: 10px;
    background-color: #fff;
    color: hsl(209, 23%, 22%);
    text-align: right;
  }
  .switch {
    display: block;
    width: 24px;
    margin: 5px;
    background: hsl(200, 15%, 8%);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    border: 0 solid #bbb;
    border-radius: 20px;
    transition: all 0.3s ease-in 0s;
  }
  .checkbox:checked + .label {
    .inner {
      margin-left: 0;
    }
    .switch {
      right: 0px;
    }
  }
`;

const ToggleSwitch = ({ name, setTheme }) => {
  const [storedTheme, setStoredTheme] = useState();
  const [checked, setChecked] = useState(false);
  const theme = useTheme();

  const handleChange = () => {
    setTheme(storedTheme);
  };
  useEffect(() => {
    setStoredTheme(theme.mode);
    if (storedTheme === 'light') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [storedTheme]);
  return (
    <StyledSwitch>
      <input
        type='checkbox'
        name={name}
        className='checkbox'
        checked={checked}
        id={name}
        onChange={handleChange}
      />

      <label
        className='label'
        htmlFor={name}
      >
        <span className='inner' />
        <span className='switch' />
      </label>
    </StyledSwitch>
  );
};
export default ToggleSwitch;
