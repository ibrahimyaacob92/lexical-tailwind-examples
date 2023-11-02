import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical';
import { useEffect } from 'react';


const DefaultContentPlugin = ({ defaultText }: { defaultText: string[] }) => {
  const [editor] = useLexicalComposerContext();

  // 
  useEffect(() => {
    editor.update(() => {
      const rootNode = $getRoot()
      rootNode.clear()
      defaultText.forEach((text) => {
        const paragraphNode = $createParagraphNode();
        const textNode = $createTextNode(text)
        paragraphNode.append(textNode)
        rootNode.append(paragraphNode)
      })

    })
  }, [defaultText, editor])

  return (
    null
  )
}

export default DefaultContentPlugin