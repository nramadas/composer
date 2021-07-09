import cx from 'classnames';
import React from 'react';
import { useQuery } from 'urql';

import { H3 } from '#components/typography/H3';
import { H4 } from '#components/typography/H4';
import { Metadata } from '#components/viewComposition/Metadata';
import { Row } from '#components/viewComposition/Row';
import { BlockType } from '#lib/models/Block';
import { Composition } from '#lib/models/Composition';
import { User } from '#lib/models/User';

import fetchCompositionQuery from './fetchComposition.gql';
import styles from './index.module.scss';

function cleanUp(blocks: Composition['blocks']): Composition['blocks'] {
  const result: Composition['blocks'] = [];
  let skipCleanup = false;

  for (let i = blocks.length - 1; i >= 0; i--) {
    const row = blocks[i];
    if (skipCleanup) {
      result.push(row);
    } else {
      row.forEach(block => {
        if (block.type !== BlockType.Undefined) {
          skipCleanup = true;
        }
      });

      if (skipCleanup) {
        result.push(row);
      }
    }
  }

  return result.reverse();
}

interface Props {
  className?: string;
  userId: User['id'];
  compositionKey: Composition['key'];
}

export function View(props: Props) {
  const [result] = useQuery({
    query: fetchCompositionQuery,
    variables: { userId: props.userId, key: props.compositionKey },
  });

  const composition: Composition | null = result.data?.getComposition;

  if (result.fetching) {
    return <div />;
  }

  if (!composition) {
    return (
      <article className={cx(styles.notFound, props.className)}>
        <H3>Composition not found</H3>
      </article>
    );
  }

  return (
    <article className={cx(styles.container, props.className)}>
      <H4 className={styles.title}>{composition.title}</H4>
      <Metadata className={styles.metaData} composition={composition} />
      <div className={styles.blocksWrapper}>
        <div className={cx(styles.blocks)}>
          {cleanUp(composition.blocks).map((row, i) => (
            <Row
              blocks={row}
              className={styles.row}
              key={i}
              taala={composition.taala}
              title={composition.sectionTitles[i]}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
