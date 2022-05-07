import sinon from 'sinon';
import { describe, it, expect, afterEach } from 'vitest';

describe('dummy', () => {
	const sandbox = sinon.createSandbox();

	afterEach(sandbox.restore);

	it('dummy', () => {
        expect(1).toEqual(1);
	});
});