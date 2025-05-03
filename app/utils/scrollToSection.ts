export const scrollToSection = (id: string) => {
  console.log(id);
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
