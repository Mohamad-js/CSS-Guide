'use client'
import styles from "./page.module.css";
import { useState } from "react";
import Image from "next/image";



export default function Home() {
   const [menu, setMenu] = useState({
      general: true, flex: false, animation: false, queries: false 
   });

   const [clipPath, setClipPath] = useState('');
   const [bgColor, setBgColor] = useState('#ff0000');
   const [color, setColor] = useState('#ffffff');
   const [width, setWidth] = useState('100px');
   const [height, setHeight] = useState('100px');
   const [border, setBorder] = useState('1px solid red');
   const [borderRadius, setBorderRadius] = useState('0px');
   const [padding, setPadding] = useState('10px');
   const [margin, setMargin] = useState('20px');
   const [fontSize, setFontSize] = useState('10px');
   const [fontFamily, setFontFamily] = useState('arial');
   const [boxShadow, setBoxShadow] = useState('5px 5px 10px 0 black');
   const [opacity, setOpacity] = useState(1);
   const [visibility, setVisibility] = useState('visible');
   const [display, setDisplay] = useState('block');
   const [justifyContent, setJustifyContent] = useState('start');
   const [alignItems, setAlignItems] = useState('start');
   const [alignContent, setAlignContent] = useState('stretch');
   const [gap, setGap] = useState('1px');
   const [flexDirection, setFlexDirection] = useState('row');
   const [flexWrap, setFlexWrap] = useState('no-wrap');
   const [flexGrow13, setFlexGrow13] = useState(0);
   const [flexGrow14, setFlexGrow14] = useState(0);
   const [flexGrow15, setFlexGrow15] = useState(0);
   const [flexGrow16, setFlexGrow16] = useState(0);
   const [flexGrow17, setFlexGrow17] = useState(0);
   const [flexGrow18, setFlexGrow18] = useState(0);
   const [alignSelf13, setAlignSelf13] = useState('auto');
   const [alignSelf14, setAlignSelf14] = useState('auto');
   const [alignSelf15, setAlignSelf15] = useState('auto');
   const [alignSelf16, setAlignSelf16] = useState('auto');
   const [alignSelf17, setAlignSelf17] = useState('auto');
   const [alignSelf18, setAlignSelf18] = useState('auto');


   const handleBgColorChange = (e) => {
      setBgColor(e.target.value);
   };

   const handleColorChange = (e) => {
      setColor(e.target.value);
   };

   const handleWidthChange = (e) => {
      setWidth(e.target.value);
   };

   const handleHeightChange = (e) => {
      setHeight(e.target.value);
   };

   const handleBorderChange = (e) => {
      setBorder(e.target.value);
   };

   const handleBorderRadiusChange = (e) => {
      setBorderRadius(e.target.value);
   };

   const handlePaddingChange = (e) => {
      setPadding(e.target.value);
   };

   const handleMarginChange = (e) => {
      setMargin(e.target.value);
   };

   const handleFontSizeChange = (e) => {
      setFontSize(e.target.value);
   };

   const handleFontFamilyChange = (e) => {
      setFontFamily(e.target.value);
   };

   const handlebBoxShadowChange = (e) => {
      setBoxShadow(e.target.value);
   };

   const handlebClipPathChange = (e) => {
      setClipPath(e.target.value);
   };

   const handlebOpacityChange = (e) => {
      setOpacity(e.target.value);
   };

   const handlebVisibilityChange = (e) => {
      setVisibility(e.target.value);
   };

   const handleDisplayChange = (e) => {
      setDisplay(e.target.value);
   };

   const handleJustifyContentChange = (e) => {
      setJustifyContent(e.target.value);
   };

   const handleAlignItemsChange = (e) => {
      setAlignItems(e.target.value);
   };

   const handleGapChange = (e) => {
      setGap(e.target.value);
   };

   const handleFlexDirectionChange = (e) => {
      setFlexDirection(e.target.value);
   };

   const handleFlexWrapChange = (e) => {
      setFlexWrap(e.target.value);
   };

   const handleAlignContentChange = (e) => {
      setAlignContent(e.target.value);
   };

   const handleFlexGrow13Change = (e) => {
      setFlexGrow13(e.target.value);
   };

   const handleFlexGrow14Change = (e) => {
      setFlexGrow14(e.target.value);
   };

   const handleFlexGrow15Change = (e) => {
      setFlexGrow15(e.target.value);
   };

   const handleFlexGrow16Change = (e) => {
      setFlexGrow16(e.target.value);
   };

   const handleFlexGrow17Change = (e) => {
      setFlexGrow17(e.target.value);
   };

   const handleFlexGrow18Change = (e) => {
      setFlexGrow18(e.target.value);
   };

   const handleAlignSelf13Change = (e) => {
      setAlignSelf13(e.target.value);
   };

   const handleAlignSelf14Change = (e) => {
      setAlignSelf14(e.target.value);
   };

   const handleAlignSelf15Change = (e) => {
      setAlignSelf15(e.target.value);
   };

   const handleAlignSelf16Change = (e) => {
      setAlignSelf16(e.target.value);
   };

   const handleAlignSelf17Change = (e) => {
      setAlignSelf17(e.target.value);
   };

   const handleAlignSelf18Change = (e) => {
      setAlignSelf18(e.target.value);
   };

   const toggleMenu = (income) => {
      income === 'general' && setMenu({
         general: true, flex: false, animation: false, queries: false, position: false 
      })

      income === 'flex' && setMenu({
         general: false, flex: true, animation: false, queries: false, position: false 
      })

      income === 'animation' && setMenu({
         general: false, flex: false, animation: true, queries: false, position: false 
      })

      income === 'queries' && setMenu({
         general: false, flex: false, animation: false, queries: true, position: false
      })

      income === 'position' && setMenu({
         general: false, flex: false, animation: false, queries: false, position: true
      })
   }

   return (
      <div className={styles.container}>
         <Image className={styles.backImage}
            src={'/image.jpg'}
            alt="background"
            fill
         />

         <div className={styles.navbar}>
            <div className={styles.title}>CSS Instructions Manual</div>

            <div className={styles.tabHolder}>
               <div className={`${styles.tabItem} ${menu.general && styles.selected}`} onClick={() => toggleMenu('general')}>General Styling</div>
               <div className={`${styles.tabItem} ${menu.flex && styles.selected}`} onClick={() => toggleMenu('flex')}>CSS Flex Box</div>
               <div className={`${styles.tabItem} ${menu.position && styles.selected}`} onClick={() => toggleMenu('position')}>Positioning</div>
               <div className={`${styles.tabItem} ${menu.animation && styles.selected}`} onClick={() => toggleMenu('animation')}>Animation</div>
               <div className={`${styles.tabItem} ${menu.queries && styles.selected}`} onClick={() => toggleMenu('queries')}>Media Queries</div>
            </div>
         </div>

         {
         menu.general &&
         <div className={styles.contentHolder}>
            <div className={styles.inputsHolder}>
               <div className={styles.sectionTitle}>Change the General Styles of Target Element</div>

               <div className={styles.inputItemsHolder}>
                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="color-picker" 
                     >
                        background-color: {bgColor}
                     </label>

                     <input className={styles.colorInput}
                        type="color" 
                        id="color-picker"
                        value={bgColor}
                        onChange={handleBgColorChange}
                     />
                  </div>
                  
                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="color-picker" 
                     >
                        color: {color}
                     </label>

                     <input className={styles.colorInput}
                        type="color" 
                        id="color-picker"
                        value={color}
                        onChange={handleColorChange}
                     />
                  </div>
                  
                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="width" 
                     >
                        width: {width}
                     </label>

                     <input className={styles.input}
                        type="text" 
                        id="width"
                        value={width}
                        onChange={handleWidthChange}
                     />
                  </div>
                  
                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="height" 
                     >
                        height: {height} 
                     </label>

                     <input className={styles.input}
                        type="text" 
                        id="height"
                        value={height}
                        onChange={handleHeightChange}
                     />
                  </div>
                  
                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="border" 
                     >
                        border: {border} 
                     </label>

                     <input className={styles.input}
                        type="text" 
                        id="border"
                        value={border}
                        onChange={handleBorderChange}
                     />
                  </div>
                  
                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="border-radius" 
                     >
                        borderRadius: {borderRadius} 
                     </label>

                     <input className={styles.input}
                        type="text" 
                        id="border-radius"
                        value={borderRadius}
                        onChange={handleBorderRadiusChange}
                     />
                  </div>
                  
                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="padding" 
                     >
                        padding: {padding} 
                     </label>

                     <input className={styles.input}
                        type="text" 
                        id="padding"
                        value={padding}
                        onChange={handlePaddingChange}
                     />
                  </div>
                  
                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="margin" 
                     >
                        margin: {margin} 
                     </label>

                     <input className={styles.input}
                        type="text" 
                        id="margin"
                        value={margin}
                        onChange={handleMarginChange}
                     />
                  </div>
                  
                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="font-size" 
                     >
                        font-size: {fontSize} 
                     </label>

                     <input className={styles.input}
                        type="text" 
                        id="font-size"
                        value={fontSize}
                        onChange={handleFontSizeChange}
                     />
                  </div>
                  
                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="box-shadow" 
                     >
                        box-shadow: {boxShadow} 
                     </label>

                     <input className={styles.input}
                        type="text" 
                        id="box-shadow"
                        value={boxShadow}
                        onChange={handlebBoxShadowChange}
                     />
                  </div>
                  
                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="font-family" 
                     >
                        font-family: {fontFamily} 
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="font-family"
                        value={fontFamily}
                        onChange={handleFontFamilyChange}
                     >
                        <option value="arial">arial</option>
                        <option value="tahoma">tahoma</option>
                        <option value="serif">serif</option>
                        <option value="impact">impact</option>
                        <option value="consolas">consolas</option>
                     </select>
                  </div>
                  
                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="clip-path" 
                     >
                        clip-path: {clipPath} 
                     </label>

                     <input className={styles.input}
                        type="text" 
                        id="clip-path"
                        value={clipPath}
                        onChange={handlebClipPathChange}
                     />
                  </div>
                  
                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="opacity" 
                     >
                        opacity: {opacity} 
                     </label>

                     <input className={styles.input}
                        type="text" 
                        id="opacity"
                        value={opacity}
                        onChange={handlebOpacityChange}
                     />
                  </div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="visibility" 
                     >
                        visibility: {visibility} 
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="visibility"
                        value={visibility}
                        onChange={handlebVisibilityChange}
                     >
                        <option value="visible">visible</option>
                        <option value="hidden">hidden</option>
                     </select>
                  </div>

               </div>
            </div>

            <div className={styles.previewHolder}>
               <div className={styles.previewTitle}>
                  See your changes here
               </div>

               <div className={styles.playground}>
                  <div className={styles.objsHolder}>
                     <div className={styles.testObj}>Other Elements</div>
                     <div className={styles.targetObjHolder}>
                        <div className={styles.testObj}>Other Elements</div>
                        <div className={styles.item}
                           style={{
                              backgroundColor: bgColor,
                              color: color,
                              width: width,
                              height: height,
                              border: border,
                              borderRadius: borderRadius,
                              padding: padding,
                              margin: margin,
                              fontSize: fontSize,
                              fontFamily: fontFamily,
                              boxShadow: boxShadow,
                              clipPath: clipPath,
                              opacity: opacity,
                              visibility: visibility,
                           }}
                        >Target Element</div>
                        <div className={styles.testObj}>Other Elements</div>
                     </div>
                     <div className={styles.testObj}>Other Elements</div>
                  </div>
               </div>
            </div>
         </div>
         }

         {
         menu.flex &&
         <div className={styles.contentHolder}>
            <div className={styles.inputsHolder}>
               <div className={styles.sectionTitle}>Change the Flex Box Settings</div>

               <div className={styles.inputItemsHolder}>
                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="display" 
                     >
                        display: {display}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="display"
                        value={display}
                        onChange={handleDisplayChange}
                     >
                        <option value="flex">flex</option>
                        <option value="block">block</option>
                     </select>
                  </div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="justify-content" 
                     >
                        justify-content: {justifyContent}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="justify-content"
                        value={justifyContent}
                        onChange={handleJustifyContentChange}
                     >
                        <option value="start">start</option>
                        <option value="center">center</option>
                        <option value="end">end</option>
                        <option value="space-between">space-between</option>
                        <option value="space-evenly">space-evenly</option>
                        <option value="space-around">space-around</option>
                     </select>
                  </div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="align-items" 
                     >
                        align-items: {alignItems}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="align-items"
                        value={alignItems}
                        onChange={handleAlignItemsChange}
                     >
                        <option value="start">start</option>
                        <option value="center">center</option>
                        <option value="end">end</option>
                     </select>
                  </div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="gap" 
                     >
                        gap: {gap} 
                     </label>

                     <input className={styles.input}
                        type="text" 
                        id="gap"
                        value={gap}
                        onChange={handleGapChange}
                     />
                  </div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="flex-direction" 
                     >
                        flex-direction: {flexDirection}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="flex-direction"
                        value={flexDirection}
                        onChange={handleFlexDirectionChange}
                     >
                        <option value="row">row</option>
                        <option value="row-reverse">row-reverse</option>
                        <option value="column">column</option>
                        <option value="column-reverse">column-reverse</option>
                     </select>
                  </div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="flex-wrap" 
                     >
                        flex-wrap: {flexWrap}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="flex-wrap"
                        value={flexWrap}
                        onChange={handleFlexWrapChange}
                     >
                        <option value="no-wrap">no-wrap</option>
                        <option value="wrap">wrap</option>
                        <option value="wrap-reverse">wrap-reverse</option>
                     </select>
                  </div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="align-content" 
                     >
                        align-content: {alignContent}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="align-content"
                        value={alignContent}
                        onChange={handleAlignContentChange}
                     >
                        <option value="stretch">stretch</option>
                        <option value="start">start</option>
                        <option value="center">center</option>
                        <option value="end">end</option>
                        <option value="space-between">space-between</option>
                        <option value="space-around">space-around</option>
                        <option value="space-evenly">space-evenly</option>
                     </select>
                  </div>

                  <div className={styles.sectionTitle2}>Styles on Child 13</div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="flex-grow" 
                     >
                        flex-grow: {flexGrow13}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="flex-grow"
                        value={flexGrow13}
                        onChange={handleFlexGrow13Change}
                     >
                        <option value="0">0</option>
                        <option value="0.25">0.25</option>
                        <option value="0.5">0.5</option>
                        <option value="0.75">0.75</option>
                        <option value="1">1</option>
                     </select>
                  </div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="align-self" 
                     >
                        align-self: {alignSelf13}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="align-self"
                        value={alignSelf13}
                        onChange={handleAlignSelf13Change}
                     >
                        <option value="auto">auto</option>
                        <option value="start">start</option>
                        <option value="center">center</option>
                        <option value="end">end</option>
                     </select>
                  </div>

                  <div className={styles.sectionTitle2}>Styles on Child 14</div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="flex-grow" 
                     >
                        flex-grow: {flexGrow14}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="flex-grow"
                        value={flexGrow14}
                        onChange={handleFlexGrow14Change}
                     >
                        <option value="0">0</option>
                        <option value="0.25">0.25</option>
                        <option value="0.5">0.5</option>
                        <option value="0.75">0.75</option>
                        <option value="1">1</option>
                     </select>
                  </div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="align-self" 
                     >
                        align-self: {alignSelf14}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="align-self"
                        value={alignSelf14}
                        onChange={handleAlignSelf14Change}
                     >
                        <option value="auto">auto</option>
                        <option value="start">start</option>
                        <option value="center">center</option>
                        <option value="end">end</option>
                     </select>
                  </div>

                  <div className={styles.sectionTitle2}>Styles on Child 15</div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="flex-grow" 
                     >
                        flex-grow: {flexGrow15}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="flex-grow"
                        value={flexGrow15}
                        onChange={handleFlexGrow15Change}
                     >
                        <option value="0">0</option>
                        <option value="0.25">0.25</option>
                        <option value="0.5">0.5</option>
                        <option value="0.75">0.75</option>
                        <option value="1">1</option>
                     </select>
                  </div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="align-self" 
                     >
                        align-self: {alignSelf15}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="align-self"
                        value={alignSelf15}
                        onChange={handleAlignSelf15Change}
                     >
                        <option value="auto">auto</option>
                        <option value="start">start</option>
                        <option value="center">center</option>
                        <option value="end">end</option>
                     </select>
                  </div>

                  <div className={styles.sectionTitle2}>Styles on Child 16</div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="flex-grow" 
                     >
                        flex-grow: {flexGrow16}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="flex-grow"
                        value={flexGrow16}
                        onChange={handleFlexGrow16Change}
                     >
                        <option value="0">0</option>
                        <option value="0.25">0.25</option>
                        <option value="0.5">0.5</option>
                        <option value="0.75">0.75</option>
                        <option value="1">1</option>
                     </select>
                  </div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="align-self" 
                     >
                        align-self: {alignSelf16}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="align-self"
                        value={alignSelf16}
                        onChange={handleAlignSelf16Change}
                     >
                        <option value="auto">auto</option>
                        <option value="start">start</option>
                        <option value="center">center</option>
                        <option value="end">end</option>
                     </select>
                  </div>

                  <div className={styles.sectionTitle2}>Styles on Child 17</div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="flex-grow" 
                     >
                        flex-grow: {flexGrow17}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="flex-grow"
                        value={flexGrow17}
                        onChange={handleFlexGrow17Change}
                     >
                        <option value="0">0</option>
                        <option value="0.25">0.25</option>
                        <option value="0.5">0.5</option>
                        <option value="0.75">0.75</option>
                        <option value="1">1</option>
                     </select>
                  </div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="align-self" 
                     >
                        align-self: {alignSelf17}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="align-self"
                        value={alignSelf17}
                        onChange={handleAlignSelf17Change}
                     >
                        <option value="auto">auto</option>
                        <option value="start">start</option>
                        <option value="center">center</option>
                        <option value="end">end</option>
                     </select>
                  </div>

                  <div className={styles.sectionTitle2}>Styles on Child 18</div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="flex-grow" 
                     >
                        flex-grow: {flexGrow18}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="flex-grow"
                        value={flexGrow18}
                        onChange={handleFlexGrow18Change}
                     >
                        <option value="0">0</option>
                        <option value="0.25">0.25</option>
                        <option value="0.5">0.5</option>
                        <option value="0.75">0.75</option>
                        <option value="1">1</option>
                     </select>
                  </div>

                  <div className={styles.inputItem}>
                     <label className={styles.inputTitle}
                        htmlFor="align-self" 
                     >
                        align-self: {alignSelf18}
                     </label>

                     <select className={styles.input}
                        type="text" 
                        id="align-self"
                        value={alignSelf18}
                        onChange={handleAlignSelf18Change}
                     >
                        <option value="auto">auto</option>
                        <option value="start">start</option>
                        <option value="center">center</option>
                        <option value="end">end</option>
                     </select>
                  </div>

               </div>
            </div>

            <div className={styles.previewHolder}>
               <div className={styles.previewTitle}>
                  See your changes here
               </div>

               <div className={styles.playground}>
                  <div className={styles.flexMom}
                     style={{
                        display: display,
                        justifyContent: justifyContent,
                        alignItems: alignItems,
                        gap: gap,
                        flexDirection: flexDirection,
                        flexWrap: flexWrap,
                        alignContent: alignContent,
                     }}
                  >
                     <div className={styles.child}>Child 1</div>
                     <div className={styles.child2}>Child 2</div>
                     <div className={styles.child}>Child 3</div>
                     <div className={styles.child2}>Child 4</div>
                     <div className={styles.child}>Child 5</div>
                     <div className={styles.child2}>Child 6</div>
                     <div className={styles.child}>Child 7</div>
                     <div className={styles.child2}>Child 8</div>
                     <div className={styles.child}>Child 9</div>
                     <div className={styles.child2}>Child 10</div>
                     <div className={styles.child}>Child 11</div>
                     <div className={styles.child2}>Child 12</div>

                     <div className={styles.child}
                        style={{
                           flexGrow: flexGrow13,
                           alignSelf: alignSelf13,
                        }}
                     >Child 13</div>

                     <div className={styles.child2}
                        style={{
                           flexGrow: flexGrow14,
                           alignSelf: alignSelf14,
                        }}
                     >Child 14</div>

                     <div className={styles.child}
                        style={{
                           flexGrow: flexGrow15,
                           alignSelf: alignSelf15,
                        }}
                     >Child 15</div>

                     <div className={styles.child2}
                        style={{
                           flexGrow: flexGrow16,
                           alignSelf: alignSelf16,
                        }}
                     >Child 16</div>

                     <div className={styles.child}
                        style={{
                           flexGrow: flexGrow17,
                           alignSelf: alignSelf17,
                        }}
                     >Child 17</div>

                     <div className={styles.child2}
                        style={{
                           flexGrow: flexGrow18,
                           alignSelf: alignSelf18,
                        }}
                     >Child 18</div>
                  </div>
               </div>
            </div>
         </div>
         }

         {
         menu.position &&
         <div className={styles.contentHolder}>
            <div className={styles.inputsHolder}>
               <div className={styles.sectionTitle}>Change the Position Settings</div>

               <div className={styles.inputItemsHolder}>
                  Soon...

               </div>
            </div>

            <div className={styles.previewHolder}>
               <div className={styles.previewTitle}>
                  See your changes here
               </div>

               <div className={styles.playground}>
                  {/* <div className={styles.objsHolder}>
                     <div className={styles.testObj}>Other Elements</div>
                     <div className={styles.targetObjHolder}>
                        <div className={styles.testObj}>Other Elements</div>
                        <div className={styles.item}
                           style={{
                              backgroundColor: bgColor,
                              color: color,
                              width: width,
                              height: height,
                              border: border,
                              borderRadius: borderRadius,
                              padding: padding,
                              margin: margin,
                              fontSize: fontSize,
                              fontFamily: fontFamily,
                           }}
                        >Target Element</div>
                        <div className={styles.testObj}>Other Elements</div>
                     </div>
                     <div className={styles.testObj}>Other Elements</div>
                  </div> */}
                  Soon...
               </div>
            </div>
         </div>
         }

         {
         menu.animation &&
         <div className={styles.contentHolder}>
            <div className={styles.inputsHolder}>
               <div className={styles.sectionTitle}>Change the Animation Settings</div>

               <div className={styles.inputItemsHolder}>
                  Soon...

               </div>
            </div>

            <div className={styles.previewHolder}>
               <div className={styles.previewTitle}>
                  See your changes here
               </div>

               <div className={styles.playground}>
                  {/* <div className={styles.objsHolder}>
                     <div className={styles.testObj}>Other Elements</div>
                     <div className={styles.targetObjHolder}>
                        <div className={styles.testObj}>Other Elements</div>
                        <div className={styles.item}
                           style={{
                              backgroundColor: bgColor,
                              color: color,
                              width: width,
                              height: height,
                              border: border,
                              borderRadius: borderRadius,
                              padding: padding,
                              margin: margin,
                              fontSize: fontSize,
                              fontFamily: fontFamily,
                           }}
                        >Target Element</div>
                        <div className={styles.testObj}>Other Elements</div>
                     </div>
                     <div className={styles.testObj}>Other Elements</div>
                  </div> */}
                  Soon...
               </div>
            </div>
         </div>
         }

         {
         menu.queries &&
         <div className={styles.contentHolder}>
            <div className={styles.inputsHolder}>
               <div className={styles.sectionTitle}>Change the Media Queries Settings</div>

               <div className={styles.inputItemsHolder}>
                  Soon...

               </div>
            </div>

            <div className={styles.previewHolder}>
               <div className={styles.previewTitle}>
                  See your changes here
               </div>

               <div className={styles.playground}>
                  {/* <div className={styles.objsHolder}>
                     <div className={styles.testObj}>Other Elements</div>
                     <div className={styles.targetObjHolder}>
                        <div className={styles.testObj}>Other Elements</div>
                        <div className={styles.item}
                           style={{
                              backgroundColor: bgColor,
                              color: color,
                              width: width,
                              height: height,
                              border: border,
                              borderRadius: borderRadius,
                              padding: padding,
                              margin: margin,
                              fontSize: fontSize,
                              fontFamily: fontFamily,
                           }}
                        >Target Element</div>
                        <div className={styles.testObj}>Other Elements</div>
                     </div>
                     <div className={styles.testObj}>Other Elements</div>
                  </div> */}
                  Soon...
               </div>
            </div>
         </div>
         }

      </div>
   );
}
