import { serverTimestamp } from 'firebase/firestore';

export const mockmessages = [
  // {
  //   text: 'hey',
  //   conversationId: ['demo@demo.com', '111@ww.com'],
  //   receiverHasRead: false,
  //   createdAt: serverTimestamp(),
  //   timestamp: Date.now(),
  //   image: null,
  //   deleteFor: [],
  //   sender: 'demo@demo.com',
  //   receiver: '111@ww.com',
  // },
  // {
  //   text: 'helloww',
  //   conversationId: ['111@ww.com', 'demo@demo.com'],
  //   receiverHasRead: false,
  //   createdAt: serverTimestamp(),
  //   timestamp: Date.now(),
  //   image: null,
  //   deleteFor: [],
  //   sender: '111@ww.com',
  //   receiver: 'demo@demo.com',
  // },
  // {
  //   text: 'How are you?',
  //   conversationId: ['demo@demo.com', '111@ww.com'],
  //   receiverHasRead: false,
  //   createdAt: serverTimestamp(),
  //   timestamp: Date.now(),
  //   image: null,
  //   deleteFor: [],
  //   sender: 'demo@demo.com',
  //   receiver: '111@ww.com',
  // },
  {
    text: 'SUP?',
    conversationId: ['barb@startz.com', '111@ww.com'],
    receiverHasRead: false,
    createdAt: serverTimestamp(),
    timestamp: Date.now(),
    image: null,
    deleteFor: [],
    sender: 'barb@startz.com',
    receiver: '111@ww.com',
  },
  {
    text: 'SUP?',
    conversationId: ['demo@demo.com', '111@ww.com'],
    receiverHasRead: false,
    createdAt: serverTimestamp(),
    timestamp: Date.now(),
    image: null,
    deleteFor: [],
    sender: 'demo@demo.com',
    receiver: '111@ww.com',
  },
];

export const mockposts = [
  {
    id: '1',
    text: 'this is first post',
    uid: 'N7eKGJMY2hXiRwPmfc1YGqwQCQ72',
    photoURL: null,
    createdAt: serverTimestamp(),
    comments: [
      {
        id: '101',
        text: 'this is a reply',
        receiver: '111@ww.com',
        sender: 'barb@startz.com',
        timeStamp: Date.now(),
        likes: ['barb@startz.com'],
        reply: [],
        userName: 'Erdi Haciogullari',
        parentID: '1',
        isParent: true,
      },
    ],
    likes: ['111@ww.com'],
    timeStamp: Date.now(),
    userEmail: 'demo@demo.com',
  },
  {
    id: '2',
    text: 'HOWDY',
    uid: 'hmNmlxoVbPQfBaMG1s2jUgVFJdX2',
    photoURL: null,
    createdAt: serverTimestamp(),
    comments: [
      {
        id: '10',
        text: 'this is a reply and this and that many many stuff and things',
        receiver: '111@ww.com',
        sender: '111@ww.com',
        timeStamp: Date.now(),
        likes: ['barb@startz.com'],
        reply: [
          {
            id: '100',
            text: 'this is a reply of a reply',
            sender: 'demo@demo.com',
            timeStamp: Date.now(),
            likes: ['barb@startz.com', '111@ww.com'],
            subComment: [],
            userName: 'Barb Starz',
            parentID: '10',
            isParent: false,
          },
        ],
        userName: 'Erdi Haciogullari',
        parentID: '2',
        isParent: true,
      },
    ],
    likes: ['111@ww.com'],
    timeStamp: Date.now(),
    userEmail: '111@ww.com',
  },
];

export const bodyParts = [
  {
    title: 'Back',
    types: ['all', 'trapezius', 'upper-back', 'lower-back'],
    icon: '/back.png',
  },
  { title: 'Chest', types: ['all', 'chest'], icon: '/body.png' },
  {
    title: 'Arms',
    types: [
      'all',
      'biceps',
      'triceps',
      'forearm',
      ' back-deltoids',
      'front-deltoids',
    ],
    icon: '/arm.png',
  },
  {
    title: 'Legs',
    types: [
      'all',
      'quadriceps',
      'hamstring',
      'gluteal',
      'calves',
      'adductor',
      'abductors',
      'right-soleus',
      'left-soleus',
      'knees',
    ],
    icon: '/leg.png',
  },
  {
    title: 'Core',
    types: ['all', 'abductors', 'abs', 'adductor', 'obliques'],
    icon: '/torso.png',
  },
  { title: 'Head', types: ['all', 'head', 'neck'], icon: '/head.png' },
  { title: 'Abs', types: ['all', 'abs', 'obliques'], icon: '/abs.png' },
];
