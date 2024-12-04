import SelectSearch from 'react-select-search';

export const SelectSearchInput = () => {

    const options = [
        {name: 'Swedish', value: 'sv'},
        {name: 'English', value: 'en'},
        {
            type: 'group',
            name: 'Group name',
            items: [
                {name: 'Spanish', value: 'es'},
            ]
        },
    ];

    return (
        <>
            <SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" />
        </>
    )
} 