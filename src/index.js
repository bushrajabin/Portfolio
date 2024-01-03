import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
 const root_Element = document.getElementById("root");
const root = createRoot(root_Element);
root.render( <App />);
