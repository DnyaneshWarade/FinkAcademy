import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AdrianaSProposal.module.css';
import { ChartTimelineVariantShimmerIco2 } from './ChartTimelineVariantShimmerIco2.js';
import { ChartTimelineVariantShimmerIco3 } from './ChartTimelineVariantShimmerIco3.js';
import { ChartTimelineVariantShimmerIco4 } from './ChartTimelineVariantShimmerIco4.js';
import { ChartTimelineVariantShimmerIco5 } from './ChartTimelineVariantShimmerIco5.js';
import { ChartTimelineVariantShimmerIco } from './ChartTimelineVariantShimmerIco.js';
import { CheckmarkIcon2 } from './CheckmarkIcon2.js';
import { CheckmarkIcon3 } from './CheckmarkIcon3.js';
import { CheckmarkIcon4 } from './CheckmarkIcon4.js';
import { CheckmarkIcon5 } from './CheckmarkIcon5.js';
import { CheckmarkIcon } from './CheckmarkIcon.js';
import { CommentAccountOutlineIcon2 } from './CommentAccountOutlineIcon2.js';
import { CommentAccountOutlineIcon3 } from './CommentAccountOutlineIcon3.js';
import { CommentAccountOutlineIcon4 } from './CommentAccountOutlineIcon4.js';
import { CommentAccountOutlineIcon5 } from './CommentAccountOutlineIcon5.js';
import { CommentAccountOutlineIcon } from './CommentAccountOutlineIcon.js';
import { Ellipse157Icon2 } from './Ellipse157Icon2.js';
import { Ellipse157Icon3 } from './Ellipse157Icon3.js';
import { Ellipse157Icon4 } from './Ellipse157Icon4.js';
import { Ellipse157Icon5 } from './Ellipse157Icon5.js';
import { Ellipse157Icon } from './Ellipse157Icon.js';
import { FinkAcademyCourse } from './FinkAcademyCourse/FinkAcademyCourse';
import { HomeOutlineIcon2 } from './HomeOutlineIcon2.js';
import { HomeOutlineIcon3 } from './HomeOutlineIcon3.js';
import { HomeOutlineIcon4 } from './HomeOutlineIcon4.js';
import { HomeOutlineIcon5 } from './HomeOutlineIcon5.js';
import { HomeOutlineIcon } from './HomeOutlineIcon.js';
import { LoaderIcon2 } from './LoaderIcon2.js';
import { LoaderIcon3 } from './LoaderIcon3.js';
import { LoaderIcon4 } from './LoaderIcon4.js';
import { LoaderIcon } from './LoaderIcon.js';
import { MagnifyIcon2 } from './MagnifyIcon2.js';
import { MagnifyIcon3 } from './MagnifyIcon3.js';
import { MagnifyIcon4 } from './MagnifyIcon4.js';
import { MagnifyIcon5 } from './MagnifyIcon5.js';
import { MagnifyIcon } from './MagnifyIcon.js';
import { MenuIcon2 } from './MenuIcon2.js';
import { MenuIcon3 } from './MenuIcon3.js';
import { MenuIcon4 } from './MenuIcon4.js';
import { MenuIcon5 } from './MenuIcon5.js';
import { MenuIcon } from './MenuIcon.js';
import { MessageTextCircle2Icon2 } from './MessageTextCircle2Icon2.js';
import { MessageTextCircle2Icon3 } from './MessageTextCircle2Icon3.js';
import { MessageTextCircle2Icon4 } from './MessageTextCircle2Icon4.js';
import { MessageTextCircle2Icon5 } from './MessageTextCircle2Icon5.js';
import { MessageTextCircle2Icon } from './MessageTextCircle2Icon.js';
import { NotificationsNoneIcon2 } from './NotificationsNoneIcon2.js';
import { NotificationsNoneIcon3 } from './NotificationsNoneIcon3.js';
import { NotificationsNoneIcon4 } from './NotificationsNoneIcon4.js';
import { NotificationsNoneIcon5 } from './NotificationsNoneIcon5.js';
import { NotificationsNoneIcon } from './NotificationsNoneIcon.js';
import { SchoolOutlineIcon2 } from './SchoolOutlineIcon2.js';
import { SchoolOutlineIcon3 } from './SchoolOutlineIcon3.js';
import { SchoolOutlineIcon4 } from './SchoolOutlineIcon4.js';
import { SchoolOutlineIcon5 } from './SchoolOutlineIcon5.js';
import { SchoolOutlineIcon } from './SchoolOutlineIcon.js';
import { StarLargeIcon2 } from './StarLargeIcon2.js';
import { StarLargeIcon3 } from './StarLargeIcon3.js';
import { StarLargeIcon4 } from './StarLargeIcon4.js';
import { StarLargeIcon5 } from './StarLargeIcon5.js';
import { StarLargeIcon6 } from './StarLargeIcon6.js';
import { StarLargeIcon7 } from './StarLargeIcon7.js';
import { StarLargeIcon8 } from './StarLargeIcon8.js';
import { StarLargeIcon9 } from './StarLargeIcon9.js';
import { StarLargeIcon10 } from './StarLargeIcon10.js';
import { StarLargeIcon } from './StarLargeIcon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';
import { WalletBifoldOutlineIcon2 } from './WalletBifoldOutlineIcon2.js';
import { WalletBifoldOutlineIcon3 } from './WalletBifoldOutlineIcon3.js';
import { WalletBifoldOutlineIcon4 } from './WalletBifoldOutlineIcon4.js';
import { WalletBifoldOutlineIcon5 } from './WalletBifoldOutlineIcon5.js';
import { WalletBifoldOutlineIcon } from './WalletBifoldOutlineIcon.js';
import { WeatherNightIcon2 } from './WeatherNightIcon2.js';
import { WeatherNightIcon3 } from './WeatherNightIcon3.js';
import { WeatherNightIcon4 } from './WeatherNightIcon4.js';
import { WeatherNightIcon5 } from './WeatherNightIcon5.js';
import { WeatherNightIcon } from './WeatherNightIcon.js';
import { WhiteBalanceSunnyIcon2 } from './WhiteBalanceSunnyIcon2.js';
import { WhiteBalanceSunnyIcon3 } from './WhiteBalanceSunnyIcon3.js';
import { WhiteBalanceSunnyIcon4 } from './WhiteBalanceSunnyIcon4.js';
import { WhiteBalanceSunnyIcon5 } from './WhiteBalanceSunnyIcon5.js';
import { WhiteBalanceSunnyIcon } from './WhiteBalanceSunnyIcon.js';
import { Link } from 'react-router-dom';
import { Chat } from './Chat/Chat';

interface Props {
  className?: string;
}
/* @figmaId 343:937 */
export const Home: FC<Props> = memo(function AdrianaSProposal(props = {}) {
  
  
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.finkAcademyHomeChatDefault}>
        <div className={classes.frame2609565}>
          <div className={classes.finkAcademy}>FinkAcademy</div>
          <div className={classes.allYourStockInvestingQuestions}>All your stock investing questions answered</div>
        </div>
        <div className={classes.frame2609703}>
          <div className={classes.content}>
            <div className={classes._1Introduction}>1. Introduction</div>
            <div className={classes.understandBasicConsecteturAdip}>Understand basic consectetur adipiscing elit.</div>
          </div>
          <div className={classes._6MinCompletedSep132023}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>6 min ∙</span>
              <span className={classes.label2}> </span>
              <span className={classes.label3}>Completed Sep 13, 2023</span>
            </p>
          </div>
          <div className={classes.picture}>
            <div className={classes.image221}></div>
          </div>
        </div>
        <div className={classes.frame2609706}>
          <div className={classes.content2}>
            <div className={classes._3NextSteps}>3. Next Steps</div>
            <div className={classes.continueWithEiusmodTemporIncid}>
              Continue with eiusmod tempor incididunt ut labore et.
            </div>
          </div>
          <div className={classes._11Min}>11 min</div>
          <div className={classes.picture2}>
            <div className={classes.image2212}></div>
          </div>
        </div>
        <div className={classes.frame2609704}>
          <div className={classes.content3}>

            <div className={classes._2TheBasicsOfStockInvesting}>
             <Link to="/about"> 2. The Basics of Stock Investing</Link>
             </div>
            <div className={classes.afterSedDoEiusmodTemporIncidid}>
              After, sed do eiusmod tempor incididunt ut labore et ipsum.
            </div>
          </div>
          <div className={classes._18MinInProgress}>18 min ∙ In progress</div>
          <div className={classes.picture3}>
            <div className={classes.image2213}></div>
          </div>
        </div>
        <div className={classes.frame2609707}>
          <div className={classes.content4}>
            <div className={classes._4StockInvestingWeekWithStockFi}>4. #StockInvestingWeek with StockFink</div>
            <div className={classes.learnAboutTemporIncididuntUtLa}>
              Learn about tempor incididunt ut labore et dolore!
            </div>
          </div>
          <div className={classes._3Min}>3 min</div>
          <div className={classes.picture4}>
            <div className={classes.image2214}></div>
          </div>
        </div>
        
        
        <div className={classes.dASHNAV}>
          <div className={classes.menu}>
            <MenuIcon className={classes.icon2} />
          </div>
          <div className={classes.frame2609450}>
            <div className={classes.frame2609390}>
              <div className={classes.frame2608907}>
                <div className={classes.frame128}>
                  <div className={classes.frame123}>
                    <div className={classes.homeOutline}>
                      <HomeOutlineIcon className={classes.icon3} />
                    </div>
                  </div>
                  <div className={classes.frame124}>
                    <div className={classes.chartTimelineVariantShimmer}>
                      <ChartTimelineVariantShimmerIco className={classes.icon4} />
                    </div>
                  </div>
                  <div className={classes.frame126}>
                    <div className={classes.walletBifoldOutline}>
                      <WalletBifoldOutlineIcon className={classes.icon5} />
                    </div>
                  </div>
                  <div className={classes.frame129}>
                    <div className={classes.schoolOutline}>
                      <SchoolOutlineIcon className={classes.icon6} />
                    </div>
                  </div>
                  <div className={classes.frame127}>
                    <div className={classes.commentAccountOutline}>
                      <CommentAccountOutlineIcon className={classes.icon7} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.menu2}>
          <div className={classes.magnify}>
            <MagnifyIcon className={classes.icon8} />
          </div>
          <div className={classes.notificationsNone}>
            <NotificationsNoneIcon className={classes.icon9} />
          </div>
          <div className={classes.ellipse157}>
            <Ellipse157Icon className={classes.icon10} />
          </div>
          <div className={classes.messageTextCircle2}>
            <MessageTextCircle2Icon className={classes.icon11} />
          </div>
        </div>
        <Chat />
        <div className={classes.starLarge}>
          <StarLargeIcon className={classes.icon12} />
        </div>
        <div className={classes.starLarge2}>
          <StarLargeIcon2 className={classes.icon13} />
        </div>
      </div>
    </div>
  );
});
