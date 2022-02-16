import { Event } from "./event";
import Traits from "./traits";
import TraitCMPT from "./traits_components";
// eslint-disable-next-line import/no-anonymous-default-export
export default (editor) => {
  Event(editor);
  Traits(editor);
  TraitCMPT(editor);
};
