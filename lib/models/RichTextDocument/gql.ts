import { GraphQLJSON } from 'graphql-type-json';
import { Field, ObjectType } from 'type-graphql';

import { RichTextDocument as RichTextDocumentModel } from './index';

@ObjectType({ description: 'A rich text document' })
export class RichTextDocument implements RichTextDocumentModel {
  @Field(type => GraphQLJSON, {
    description: 'The blocks that make up the document',
  })
  content!: RichTextDocumentModel['content'];
}
