import { useState } from "react";
import Box from "@mui/material/Box";
import "./App.css";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#8C8C8C",
            dark: "#464646",
          },
        },
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  );
}

export default App;
