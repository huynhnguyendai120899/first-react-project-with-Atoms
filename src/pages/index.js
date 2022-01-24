import MainPageOrganisms from "../components/organisms/MainPage";

const App = () => {
  const midContentData =
  {
    logoLink: 'https://nhapluu.org/assets/images/whitelogo.png',
    title: 'ESTABLISHED BY ZEN MASTER THICH NHAT HANH TO SHARE THE PRACTICE OF MINDFUL LIVING',
    text1 : 'Breathing in, I calm my body',
    text2 : 'Breathing out, I smile',
    text3 : 'Dwelling in the present moment',
    text4 : 'I know this is a wonderful moment',
    text5 : 'Stream Entering (aka. Nhập Lưu) Monastery is a mindfulness practice center in the tradition of Plum Village, founded by Zen Master Thich Nhat Hanh.',
    text6 : 'We are located in Daylesford - a peaceful and leafy town in the foothills of the Great Dividing Range of Victoria, Australia. If you want to get here by car, we have several spacious parking areas available for visitors. You can also take public transport organised by VLine from Melbourne, the sisters can pick you up at CFA/Bridport St station.. If you using the public transportation, please check train timetable in advance for your convenience from here:',
    link : 'https://www.vline.com.au/getattachment/43060e1b-f880-4434-a740-74fa900a2c96/Daylesford-Melbourne-(via-Ballarat-and-Woodend)',
    buttonList : [
      {
        id: 1,
        title: 'En',
        url: 'https://en.nhapluu.org/'
      },
      {
        id: 2,
        title: 'Vn',
        url: 'https://vi.nhapluu.org/'
      }
    ]
  }
  return (
    <MainPageOrganisms data={midContentData}/>
  );
};

export default App;
