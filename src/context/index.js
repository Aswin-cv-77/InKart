import React, {createContext, useContext, useEffect, useState} from 'react';
import {useWindowDimensions, Dimensions} from 'react-native';

export const DimensionContext = createContext();

export const useDimensionContext = () => useContext(DimensionContext);

export const DimensionContextProvider = ({children}) => {
  const dimension = useWindowDimensions();
  const initHeight = Dimensions.get('window').height;
  const initWidth = Dimensions.get('window').width;

  const [windowHeight, setWindowHeight] = useState(initHeight);
  const [windowWidth, setWindowWidth] = useState(initWidth);

  const [isPortrait, setIsPortrait] = useState(false)

  const checkIsPortrait = () => {
    const dime = Dimensions.get('screen');
    return dime.height >= dime.width;
  };

  useEffect(() => {
    setIsPortrait(checkIsPortrait())
    Dimensions.addEventListener('change', () => {
      setIsPortrait(checkIsPortrait())
    });
  }, []);

  useEffect(() => {
    setItem();
  }, [dimension]);

  const setItem = () => {
    const {height, width} = dimension;
    setWindowHeight(height);
    setWindowWidth(width);
  };

  return (
    <DimensionContext.Provider value={{
      windowHeight, 
      windowWidth,
      isPortrait,
      }}>
      {children}
    </DimensionContext.Provider>
  );
};
