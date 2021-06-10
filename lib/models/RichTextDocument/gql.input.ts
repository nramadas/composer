import { GraphQLJSON } from 'graphql-type-json';
import { Field, InputType } from 'type-graphql';

import { RichTextDocument as RichTextDocumentModel } from './index';

@InputType({ description: 'A rich text document' })
export class RichTextDocumentInput implements RichTextDocumentModel {
  @Field(type => GraphQLJSON, {
    description: 'The blocks that make up the document',
  })
  content!: RichTextDocumentModel['content'];
}
