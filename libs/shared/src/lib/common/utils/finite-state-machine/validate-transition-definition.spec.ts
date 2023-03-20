import { Transitions } from './types';
import { validateTransitionDefinition } from './validate-transition-definition';

describe('FSM validateTransitionDefinition()', () => {
  it('valid definition', () => {
    const valid: Transitions<'Start' | 'End'> = {
      Start: { to: ['End'] },
      End: { to: ['Start'] },
    };

    const result = validateTransitionDefinition(valid, 'Start');

    expect(result.valid).toBe(true);
  });

  it('invalid - unreachable state', () => {
    const valid: Transitions<'Start' | 'End' | 'Unreachable'> = {
      Start: { to: ['End'] },
      End: { to: ['Start'] },
      Unreachable: { to: [] },
    };

    const result = validateTransitionDefinition(valid, 'Start');

    expect(result.valid).toBe(false);
    expect(result.error).toBe(
      'The following states are unreachable: Unreachable',
    );
  });
});
