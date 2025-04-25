export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
  };
  logo: string;
  font: string;
};

export async function getTheme(): Promise<Theme> {
  const res = await fetch("/assets/data/theme.json");
  return await res.json();
}
