import stateFreezer from '../stateFreezer';

const initialState = {
  1: { id: 1, content: 'old content' },
};

const mockReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD':
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case 'MUTATING':
      /* eslint-disable-next-line no-param-reassign */
      state[action.payload.id] = action.payload;
      return state;
    default:
      return state;
  }
};

const frozenReducer = stateFreezer(mockReducer);

describe('stateFreezer', () => {
  it('should handle non-mutating', () => {
    const state = initialState;
    const newState = frozenReducer(state, {
      type: 'GOOD',
      payload: { id: 1, content: 'new content' },
    });

    expect(newState).toEqual({
      1: { id: 1, content: 'new content' },
    });
  });

  it('should throw an error when mutating', () => {
    const state = initialState;
    expect(() => frozenReducer(state, {
      type: 'MUTATING',
      payload: { id: 1, content: 'new content' },
    })).toThrow();
  });
});
