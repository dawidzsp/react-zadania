import { useReducer } from 'react';

function shoppingReducer(state, action) {
    switch (action.type) {
        case 'write': {
            return {
                value: action.value,
                list: state.list
            };
        }

        case 'add': {
            if (!state.value) {
                return {
                    value: '',
                    list: state.list
                };
            }

            return {
                value: '',
                list: [
                    {
                        id: crypto.randomUUID(),
                        text: state.value,
                    },
                    ...state.list
                ],
            };
        }

        case 'remove': {
            return {
                value: state.value,
                list: state.list.filter(item => item.id !== action.id),
            };
        }
    }
}

export function ReducerComponent() {
    const [shoppingList, dispatch] = useReducer(shoppingReducer, {
        value: '',
        list: [],
    });

    function handleWrite(value) {
        dispatch({
            type: 'write',
            value,
        });
    }

    function handleAdd() {
        dispatch({
            type: 'add',
        });
    }

    function handleRemove(id) {
        dispatch({
            type: 'remove',
            id,
        });
    }

    return (
    <div style={{ paddingLeft: '30px' }}>
        <h1>Lista zakupów</h1>
        <input
            type="text"
            style={{ marginRight: '15px', padding: '10px' }}
            value={shoppingList.value}
            onChange={e => handleWrite(e.target.value)}
            onKeyUp={e => e.code === 'Enter' && handleAdd()}
        />
        <button onClick={handleAdd}>Dodaj</button>
        <ul>
            {shoppingList.list.map(item => (
                <li key={item.id} style={{ marginBottom: '15px' }}>
                    <span style={{ fontSize: '20px' }}>{item.text}</span>
                    <button
                        style={{ marginLeft: '15px' }}
                        onClick={() => handleRemove(item.id)}
                    >
                        Usuń
                    </button>
                </li>
            ))}
        </ul>
    </div>
);
}