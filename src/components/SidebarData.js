import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'ソリューション',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: '会社情報',
    path: '/products',
    icon: <FaIcons.FaRegNewspaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '企業理念',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '会社概要',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]

  },

  {
    title: 'お問い合わせ',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'お問い合わせについて',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '個人情報保護方針',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '個人情報取り扱いについて',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '採用について',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }

    ]
  },
];
