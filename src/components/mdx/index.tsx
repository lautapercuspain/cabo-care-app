import Link from 'next/link'
import ResourceLink from './resource-link'
import Card from './card'
import HeaderCard from './header-card'
import QuestionReveal from './question-reveal'
import Callout from './callout'
import ProseSection from './prose-section'
import CheatSheet from './cheat-sheet'
import DefaultLayout from '../../layouts'
import CodeBlock from './code-block'

const mdxComponents = {
  Link,
  ResourceLink,
  Card,
  HeaderCard,
  QuestionReveal,
  Callout,
  ProseSection,
  CheatSheet,
  DefaultLayout,
  pre: (props: any) => (
    <CodeBlock
      language={props.children.props.className || ''}
      metastring={props.children.props.metastring}
    >
      {props.children.props.children}
    </CodeBlock>
  ),
}

export default mdxComponents
