(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(89)),c={id:"usage",title:"Usage",slug:"/usage",hide_table_of_contents:!0},s={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Usage",description:"Here is a simple usage of the Bottom Sheet, with non-scrollable content. For more scrollable usage please read Scrollables.",source:"@site/docs/usage.md",slug:"/usage",permalink:"/react-native-bottom-sheet/usage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/usage.md",version:"current",sidebar:"packages",previous:{title:"Getting Started",permalink:"/react-native-bottom-sheet/"},next:{title:"Props",permalink:"/react-native-bottom-sheet/props"}},i=[],l={rightToc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Here is a simple usage of the ",Object(a.b)("strong",{parentName:"p"},"Bottom Sheet"),", with non-scrollable content. For more scrollable usage please read ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./scrollables"}),"Scrollables"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React, { useCallback, useMemo, useRef } from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\nimport BottomSheet from '@gorhom/bottom-sheet';\n\nconst App = () => {\n  // ref\n  const bottomSheetRef = useRef<BottomSheet>(null);\n\n  // variables\n  const snapPoints = useMemo(() => ['25%', '50%'], []);\n\n  // callbacks\n  const handleSheetChanges = useCallback((index: number) => {\n    console.log('handleSheetChanges', index);\n  }, []);\n\n  // renders\n  return (\n    <View style={styles.container}>\n      <BottomSheet\n        ref={bottomSheetRef}\n        index={1}\n        snapPoints={snapPoints}\n        onChange={handleSheetChanges}\n      >\n        <View style={styles.contentContainer}>\n          <Text>Awesome \ud83c\udf89</Text>\n        </View>\n      </BottomSheet>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 24,\n    backgroundColor: 'grey',\n  },\n  contentContainer: {\n    flex: 1,\n    alignItems: 'center',\n  },\n});\n\nexport default App;\n")))}u.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||m[b]||a;return n?o.a.createElement(f,s(s({ref:t},l),{},{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);