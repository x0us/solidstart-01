import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { LenisProvider} from '~/context/LenisContext';
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";

export default function App() {
  return (
    <LenisProvider>
      <Router
        root={(props) => (
          <>
            {/* <Nav /> */}
            <Suspense>{props.children}</Suspense>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </LenisProvider>
  );
}
