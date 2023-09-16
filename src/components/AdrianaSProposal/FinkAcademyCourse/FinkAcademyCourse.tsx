import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ChartTimelineVariantShimmerIco } from './ChartTimelineVariantShimmerIco.js';
import { CommentAccountOutlineIcon } from './CommentAccountOutlineIcon.js';
import { Ellipse157Icon } from './Ellipse157Icon.js';
import classes from './FinkAcademyCourse.module.css';
import { HomeOutlineIcon } from './HomeOutlineIcon.js';
import { MagnifyIcon } from './MagnifyIcon.js';
import { MenuIcon } from './MenuIcon.js';
import { MessageTextCircle2Icon } from './MessageTextCircle2Icon.js';
import { NotificationsNoneIcon } from './NotificationsNoneIcon.js';
import { SchoolOutlineIcon } from './SchoolOutlineIcon.js';
import { StarLargeIcon2 } from './StarLargeIcon2.js';
import { StarLargeIcon } from './StarLargeIcon.js';
import { WalletBifoldOutlineIcon } from './WalletBifoldOutlineIcon.js';
import { WeatherNightIcon } from './WeatherNightIcon.js';
import { WhiteBalanceSunnyIcon } from './WhiteBalanceSunnyIcon.js';
import { Chat } from '../Chat/Chat';

interface Props {
  className?: string;
}
/* @figmaId 425:2 */
export const FinkAcademyCourse: FC<Props> = memo(function FinkAcademyCourse(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame2609565}>
        <div className={classes._2TheBasicsOfStockInvesting}>2. The Basics of Stock Investing</div>
        <div className={classes.afterSedDoEiusmodTemporIncidid}>
          After, sed do eiusmod tempor incididunt ut labore et ipsum.
        </div>
      </div>
      <div className={classes.howDoYouStartInvesting}>How do you start investing?</div>
      <div className={classes.firstItSImportantToDolorSitAme}>
        First, it’s important to dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.{' '}
      </div>
      <div className={classes.menu}>
        <div className={classes.magnify}>
          <MagnifyIcon className={classes.icon} />
        </div>
        <div className={classes.notificationsNone}>
          <NotificationsNoneIcon className={classes.icon2} />
        </div>
        <div className={classes.ellipse157}>
          <Ellipse157Icon className={classes.icon3} />
        </div>
        <div className={classes.messageTextCircle2}>
          <MessageTextCircle2Icon className={classes.icon4} />
        </div>
      </div>
      <div className={classes.estimatedTimeToComplete18Min}>Estimated time to complete: 18 min</div>
      <div className={classes.frame2609704}>
        <div className={classes.image221}></div>
      </div>
      <div className={classes.dASHNAV}>
        <div className={classes.menu2}>
          <MenuIcon className={classes.icon5} />
        </div>
        <div className={classes.frame2609450}>
          <div className={classes.frame2609390}>
            <div className={classes.frame2608907}>
              <div className={classes.frame128}>
                <div className={classes.frame123}>
                  <div className={classes.homeOutline}>
                    <HomeOutlineIcon className={classes.icon6} />
                  </div>
                </div>
                <div className={classes.frame124}>
                  <div className={classes.chartTimelineVariantShimmer}>
                    <ChartTimelineVariantShimmerIco className={classes.icon7} />
                  </div>
                </div>
                <div className={classes.frame126}>
                  <div className={classes.walletBifoldOutline}>
                    <WalletBifoldOutlineIcon className={classes.icon8} />
                  </div>
                </div>
                <div className={classes.frame129}>
                  <div className={classes.schoolOutline}>
                    <SchoolOutlineIcon className={classes.icon9} />
                  </div>
                </div>
                <div className={classes.frame127}>
                  <div className={classes.commentAccountOutline}>
                    <CommentAccountOutlineIcon className={classes.icon10} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chat />
      <div className={classes.starLarge}>
        <StarLargeIcon className={classes.icon11} />
      </div>
      <div className={classes.starLarge2}>
        <StarLargeIcon2 className={classes.icon12} />
      </div>
      <button className={classes.buttonPrimary}>
        <div className={classes.nextLesson}>Next lesson</div>
      </button>
      <button className={classes.buttonPrimary2} >
        <div className={classes.previous}>
          Previous</div>
      </button>
    </div>
  );
});
