import ThemeContext from '../src/contexts/ThemeContext';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeContext.Consumer>
      {(value) => {
        return (
          <Story
            darkMode={ThemeContext.Consumer.isDark}
            setDarkMode={ThemeContext.Consumer.setIsDark}
          />
        );
      }}
    </ThemeContext.Consumer>
  ),
];

// export const decorators = () => {
//   const [isDark, setIsDark] = useState(false);
//   return [
//     (Story) => (
//       <ThemeContext value={{ isDark, setIsDark }}>
//         {(value) => {
//           return (
//             <Story
//               darkMode={ThemeContext.Consumer.isDark}
//               setDarkMode={ThemeContext.Consumer.setIsDark}
//             />
//           )
//         }}
//       </ThemeContext>
//     ),
//   ]
// }
