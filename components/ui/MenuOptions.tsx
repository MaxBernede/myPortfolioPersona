// components/MenuOptions.ts
export interface MenuOption {
  id: string;
  label: string;
  arcana: string;
  arcanaNumber: string;
  description: string;
  available: boolean;
}

export const mainMenuOptions: MenuOption[] = [
  { id: "profile", label: "PROFILE", arcana: "The Magician", arcanaNumber: "I", description: "Personal information", available: true },
  { id: "projects", label: "PROJECTS", arcana: "The High Priestess", arcanaNumber: "II", description: "Achievements and creations", available: true },
  { id: "skills", label: "SKILLS", arcana: "The Empress", arcanaNumber: "III", description: "Technical skills", available: true },
  { id: "experience", label: "EXPERIENCE", arcana: "The Emperor", arcanaNumber: "IV", description: "Professional background", available: true },
  { id: "contact", label: "CONTACT", arcana: "The Star", arcanaNumber: "XVII", description: "Means of contact", available: true },
  { id: "about", label: "ABOUT", arcana: "The World", arcanaNumber: "XXI", description: "About this portfolio", available: true },
];
