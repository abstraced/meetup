import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { mount} from 'enzyme';
import App from '../App';  


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');



defineFeature(feature, test => {

    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppWrapper;
        given('the user has connected to the app,', () => {
        AppWrapper = mount(<App />);
        
        });

        when('the user look at the events,', () => {
        AppWrapper.update();
        });

        then('the informations are hidden( collapsed) by default .', () => {
            expect(AppWrapper.find('.extra_infos')).toHaveLength(0);
           
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppWrapper;
        given('the user wants to see a specific event', () => {
        AppWrapper = mount(<App />);
        
        });

        when('the event is clicked', () => {
            AppWrapper.update();
        AppWrapper.find('.toggleInfos').at(0).simulate('click');

        });

        then('the event is expanded and more details are displayed', () => {
            expect(AppWrapper.find('.extra_infos')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given,and, when, then }) => {
        let AppWrapper;
        given('the user no longer wants to see expanded details about an event', () => {
        AppWrapper = mount(<App />);

        });

        and ('the user has displayed the extra_infos', () => {
        AppWrapper.update();
        AppWrapper.find('.toggleInfos').at(0).simulate('click');

        });

        when('the user clicks the event button', () => {
        AppWrapper.find('.toggleInfos').at(0).simulate('click');

        });

        then('the event is collapsed and its informations are hidden', () => {
        expect(AppWrapper.find('.extra_infos')).toHaveLength(0);
        });
    });
});