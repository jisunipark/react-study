import 홍진경 from '../assets/홍진경.png';
import 박명수 from '../assets/박명수.png';

export interface Column {
  status: 'In Progress' | 'Done';
  cards: Card[];
}

export interface Card {
  status: 'In Progress' | 'Done';
  title: string;
  tag: 'Feature' | 'Improvement' | 'Bug Fix';
  profileImages: string[];
}

export interface Kanbanboard {
  inProgress: Column;
  done: Column;
}

export const KanbanboardData: Kanbanboard = {
  inProgress: {
    status: 'In Progress',
    cards: [
      {
        status: 'In Progress',
        title: 'Code functionality of the app',
        tag: 'Feature',
        profileImages: [홍진경, 박명수],
      },
      {
        status: 'In Progress',
        title: 'Stripe Payment Issue',
        tag: 'Improvement',
        profileImages: [홍진경, 박명수],
      },
      {
        status: 'In Progress',
        title: 'Paypal Issue',
        tag: 'Bug Fix',
        profileImages: [홍진경, 박명수],
      },
    ],
  },
  done: {
    status: 'Done',
    cards: [
      {
        status: 'Done',
        title: 'Social Login',
        tag: 'Improvement',
        profileImages: [홍진경, 박명수],
      },
      {
        status: 'Done',
        title: 'Arigato Gozaimasu',
        tag: 'Bug Fix',
        profileImages: [홍진경, 박명수],
      },
      {
        status: 'Done',
        title: 'Improve UI',
        tag: 'Bug Fix',
        profileImages: [홍진경, 박명수],
      },
    ],
  },
};
