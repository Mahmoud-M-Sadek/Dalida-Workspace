export enum RoomType {
  SHARED = 'مساحة مشتركة (Shared Desk)',
  PRIVATE = 'غرفة خاصة (Private Room)',
  MEETING = 'غرفة اجتماعات (Meeting Room)',
  STUDY = 'منطقة مذاكرة (Study Zone)'
}

export interface BookingDetails {
  name: string;
  phone: string;
  date: string;
  time: string;
  type: RoomType;
  guests: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
