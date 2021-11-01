import React from 'react'

import {
    StyleSheet, View, StatusBar, TouchableOpacity,Text,
  } from 'react-native';
  import PropTypes from 'prop-types';
import { scale } from 'react-native-size-matters';
 

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getHeaderHeight,getNavBarHeight,getStatusBarHeight} from "../../utils/size"
const PlainBar = ({ children }) => (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.statusBar} />
      <View style={[styles.navBar, styles.bar, styles.row]}>
        {children}
      </View>
    </>
  );
const GradientBar = ({ children }) => (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#480063"/>
      <View style={styles.container}>
  
        <View style={[styles.bar, styles.row]}>
          {children}
        </View>
    
      </View>
    </>
  );
const GhostBar = ({ children }) => (
    <>
      <StatusBar barStyle="light-content" />
      <View
        colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.3)', 'transparent']}
        style={styles.container}
      >
        <View style={[styles.bar, styles.row]}>
          {children}
        </View>
      </View>
    </>
  );
const NavBar = ({
    variant,
    title,
    leftIconName,
    onLeftIconPress,
    renderLeftComponent,
    renderRightComponent,
    containerStyle,

}) => {
    const LeftComponent=()=>{
        <View style={styles.row}>
            {onLeftIconPress && leftIconName &&(
                <TouchableOpacity>
                    <Icon
                    name={leftIconName}
                    style={styles.icon}
                    color={variant === 'plain' ? '#E6E6E6' : "#fff"}
                    />
                </TouchableOpacity>
            )}
             {renderLeftComponent && renderLeftComponent()}
      {title && (
        <Text
         
          color={variant === 'plain' ? '#191919' : 'white'}
          weight="medium"
          numberOfLines={1}
          style={styles.title}
        >
          {title}
        </Text>
      )}

        </View>
    }
    return (
        <View style={[styles.container, styles,containerStyle]}>
           {variant === 'plain' && (
        <PlainBar>
          <LeftComponent />
          {renderRightComponent && renderRightComponent()}
        </PlainBar>
      )}
      {variant === 'gradient' && (
        <GradientBar>
          <LeftComponent />
          {renderRightComponent && renderRightComponent()}
        </GradientBar>
      )}
      {variant === 'ghost' && (
        <GhostBar>
          <LeftComponent />
          {renderRightComponent && renderRightComponent()}
        </GhostBar>
      )}
        </View>
    )
}

NavBar.propTypes = {
    variant: PropTypes.oneOf(['gradient', 'plain', 'ghost']),
    onLeftIconPress: PropTypes.func,
    renderLeftComponent: PropTypes.func,
    renderRightComponent: PropTypes.func,
    title: PropTypes.string,
    leftIconName: PropTypes.oneOf(['chevron-left', 'close']),
    containerStyle: PropTypes.any,
  };
  
  NavBar.defaultProps = {
    variant: 'gradient',
    title: null,
    leftIconName: 'chevron-left',
    renderLeftComponent: null,
    renderRightComponent: null,
    onLeftIconPress: null,
    containerStyle: null,
  };
  
  GradientBar.propTypes = {
    children: PropTypes.any.isRequired,
  };
  
  PlainBar.propTypes = {
    children: PropTypes.any.isRequired,
  };
  
  GhostBar.propTypes = {
    children: PropTypes.any.isRequired,
  };

export default NavBar

const styles = StyleSheet.create({
    container: {
        height: getHeaderHeight(),
        backgroundColor: "#480063",
      },
      statusBar: {
        height: getStatusBarHeight(),
        backgroundColor: "#fff",
      },
      bar: {
        height: getNavBarHeight(),
        justifyContent: 'space-between',
        position: 'absolute',
        top: getStatusBarHeight(),
        left: 0,
        right: 0,
        paddingHorizontal: scale(14),
      },
      navBar: {
        backgroundColor: "#fff",
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      },
      icon: {
        width: scale(40),
      },
      title: {
        marginRight: scale(30),
      },
  
})
