import { loadFont } from '@remotion/fonts';
import { staticFile } from 'remotion';

const loadFonts = async () => {
  // 加载 Noto Sans SC 变量字体
//   await loadFont({
//     family: 'NotoSansSC',
//     url: staticFile('/fonts/NotoSansSC-VariableFont_wght.ttf'),
//     weight: '100 900', // 可变字体的权重范围
//   });

  const notoSansSCFonts = [
    { weight: '100', style: 'normal', file: 'NotoSansSC-Thin.ttf' },
    { weight: '200', style: 'normal', file: 'NotoSansSC-ExtraLight.ttf' },
    { weight: '300', style: 'normal', file: 'NotoSansSC-Light.ttf' },
    { weight: '400', style: 'normal', file: 'NotoSansSC-Regular.ttf' },
    { weight: '500', style: 'normal', file: 'NotoSansSC-Medium.ttf' },
    { weight: '600', style: 'normal', file: 'NotoSansSC-SemiBold.ttf' },
    { weight: '700', style: 'normal', file: 'NotoSansSC-Bold.ttf' },
    { weight: '800', style: 'normal', file: 'NotoSansSC-ExtraBold.ttf' },
    { weight: '900', style: 'normal', file: 'NotoSansSC-Black.ttf' },
  ];

  for (const font of notoSansSCFonts) {
    await loadFont({
      family: 'NotoSansSC',
      url: staticFile(`/fonts/NotoSansSC/${font.file}`),
      weight: font.weight,
      style: font.style,
    });
  }

  // 加载 Poppins 静态字体
  const poppinsFonts = [
    { weight: '400', style: 'normal', file: 'Poppins-Regular.ttf' },
    { weight: '700', style: 'normal', file: 'Poppins-Bold.ttf' },
    { weight: '400', style: 'italic', file: 'Poppins-Italic.ttf' },
    { weight: '700', style: 'italic', file: 'Poppins-BoldItalic.ttf' },
    { weight: '900', style: 'normal', file: 'Poppins-Black.ttf' },
    { weight: '900', style: 'italic', file: 'Poppins-BlackItalic.ttf' },
    { weight: '800', style: 'normal', file: 'Poppins-ExtraBold.ttf' },
    { weight: '800', style: 'italic', file: 'Poppins-ExtraBoldItalic.ttf' },
    { weight: '200', style: 'normal', file: 'Poppins-ExtraLight.ttf' },
    { weight: '200', style: 'italic', file: 'Poppins-ExtraLightItalic.ttf' },
    { weight: '300', style: 'normal', file: 'Poppins-Light.ttf' },
    { weight: '300', style: 'italic', file: 'Poppins-LightItalic.ttf' },
    { weight: '500', style: 'normal', file: 'Poppins-Medium.ttf' },
    { weight: '500', style: 'italic', file: 'Poppins-MediumItalic.ttf' },
    { weight: '600', style: 'normal', file: 'Poppins-SemiBold.ttf' },
    { weight: '600', style: 'italic', file: 'Poppins-SemiBoldItalic.ttf' },
    { weight: '100', style: 'normal', file: 'Poppins-Thin.ttf' },
    { weight: '100', style: 'italic', file: 'Poppins-ThinItalic.ttf' },
  ];

  for (const font of poppinsFonts) {
    await loadFont({
      family: 'Poppins',
      url: staticFile(`/fonts/Poppins/${font.file}`),
      weight: font.weight,
      style: font.style,
    });
  }

  console.log('All fonts loaded!');
};

export default loadFonts;
