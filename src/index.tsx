import ChatWidget from './components/ChatWidget';
import ChatWindow from './components/ChatWindow';

export const open = () => window.dispatchEvent(new Event('ecodesk:open'));
export const close = () => window.dispatchEvent(new Event('ecodesk:close'));
export const toggle = () => window.dispatchEvent(new Event('ecodesk:toggle'));

export const identify = () => {
  // TODO: add ability to create/update customer information
  console.warn('`Ecodesk.identify` has not been implemented yet!');
};

export const Ecodesk = {
  open,
  close,
  toggle,
};

export {ChatWidget, ChatWindow};

export default ChatWidget;
