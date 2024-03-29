import { Card, Flex } from 'antd';
import BannerHome from '../components/home/BannerHome';
import Advisor from '../components/home/Advisor'
import HowBuy from '../components/home/HowBuy'
import Tokenomics from '../components/home/Tokenomics';
import MeetOurTeam from '../components/home/MeetOurTeam'

const MainPage = () => {
  return (
    <div className="page-home">
      <BannerHome />
      <Advisor />
      <HowBuy />
      <Tokenomics />
      <MeetOurTeam />
    </div>
  );
};

export default MainPage;
