export enum InlineStyle {
  Bold = 'B',
  Code = 'C',
  Italic = 'I',
  Strikethrough = 'S',
  Underline = 'U',
}

export enum BlockStyle {
  Unstyled = 'U',
  P = 'P',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  UL = 'UL',
  OL = 'OL',
  Blockquote = 'BQ',
  Codeblock = 'CB',
  Atomic = 'AT',
  Link = 'A',
}

export enum NodeType {
  Anchor = 'A',
  Block = 'B',
  Child = 'C',
  Image = 'IM',
  Inline = 'I',
}

export interface InlineNode {
  t: NodeType.Inline;
  c: string;
  s?: InlineStyle[];
}

export interface AnchorNode {
  t: NodeType.Anchor;
  c: InlineNode[];
  u: string;
}

export interface ImageNode {
  t: NodeType.Image;
  c: InlineNode[];
  u: string;
}

export interface BlockNode {
  t: NodeType.Block;
  c: (AnchorNode | InlineNode | ImageNode)[];
  s: BlockStyle;
}

export interface RichTextDocument {
  content: BlockNode[];
}
