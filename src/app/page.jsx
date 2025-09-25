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
                        Background-Color: {bgColor}
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
