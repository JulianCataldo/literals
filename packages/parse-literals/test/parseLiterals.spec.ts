import { expect } from 'chai';
import * as sinon from 'sinon';
import { parseLiterals } from '../src/parseLiterals';
import createParseTests from './parse-tests';

describe('parseLiterals()', () => {
  it('should allow overriding strategy', () => {
    const result: any[] = [];
    const strategy = {
      getRootNode: sinon.fake(),
      walkNodes: sinon.fake.returns(result),
      isTaggedTemplate: sinon.fake.returns(false),
      getTagText: sinon.fake(),
      getTaggedTemplateTemplate: sinon.fake(),
      isTemplate: sinon.fake.returns(false),
      getTemplateParts: sinon.fake()
    };

    parseLiterals('true', { strategy });
    expect(strategy.getRootNode.calledWith('true')).to.be.true;
    expect(strategy.walkNodes.called).to.be.true;
  });

  createParseTests();
});
