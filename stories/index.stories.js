import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import NotificationList from '../src/components/NotificationList';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));


 const state = {
    title: 'Arrears',
    icon: 'fa fa-bank',
    items: [
        {
            id: Math.floor(Math.random() * 1000000 + 1),
            title: "B Check check check",
            date: new Date("2017-07-01"),
            priority: {
                name: "High",
                value: 1
            },
            category: "Famous people",
            url: '/detail',
            isRead: true,
            isArchived: false,
            sender: {
                firstName: 'Alan',
                lastName: 'Turing',
                avatarUrl: 'https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTUzMTE2Njg3/alan-turing-9512017-1-402.jpg'
            },
            body: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
        },
        {
            id: Math.floor(Math.random() * 1000000 + 1),
            title: "A Check check check",
            date: new Date("2015-03-03"),
            priority: {
                name: "Low",
                value: 3
            },
            category: null,
            url: null,
            isRead: true,
            isArchived: false,
            sender: null,
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et porttitor massa. Pellentesque sodales ante metus, quis gravida dolor accumsan et. Cras maximus, quam vitae fermentum consequat, mi magna aliquam ligula, ac hendrerit velit nibh ac mauris. Suspendisse ultricies dignissim enim, sit amet scelerisque ante tristique at. In tortor felis, tincidunt consequat purus eu, hendrerit pretium dui. Nunc volutpat, lacus ut placerat cursus, nulla lacus aliquet velit, id cursus odio nibh eget dolor. Vestibulum dictum congue ligula, a varius sem aliquet ut. Nunc commodo ligula nibh, sed condimentum dolor lacinia at. In euismod euismod luctus. Mauris ac arcu odio. Proin feugiat, ante et fermentum ullamcorper, eros massa consectetur est, eu congue metus erat eget neque. Suspendisse potenti. Sed sed volutpat nulla, id varius eros. Suspendisse potenti.

            Nullam maximus purus eget nunc tincidunt, quis accumsan ligula ullamcorper. Integer molestie erat id condimentum rutrum. Vestibulum et massa interdum, eleifend dui egestas, cursus mauris. Sed eu lobortis velit, nec ultricies augue. Ut ante risus, ultricies eu convallis at, consequat nec nisi. Curabitur rhoncus arcu turpis, rutrum fermentum magna mollis et. Proin ultrices aliquet rhoncus. Mauris luctus euismod orci sit amet pellentesque. Mauris mi metus, consectetur sed ipsum et, commodo convallis tellus. Nulla dui sapien, facilisis molestie sagittis quis, vehicula sit amet velit. Duis vel consequat nisl.`
        },
        {
            id: Math.floor(Math.random() * 1000000 + 1),
            title: "D Check check check",
            date: new Date("2018-04-20"),
            priority: {
                name: "Medium",
                value: 2
            },
            category: "International client",
            url: null,
            isRead: false,
            isArchived: false,
            sender: {
                firstName: "Rick Sanchez"
            },
            body: "something something in the month of may"
        },
        {
            id: Math.floor(Math.random() * 1000000 + 1),
            title: "C Check check check",
            date: new Date(),
            priority: {
                name: "High",
                value: 1
            },
            category: null,
            url: null,
            isRead: false,
            isArchived: false,
            sender: null,
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et porttitor massa. Pellentesque sodales ante metus, quis gravida dolor accumsan et. Cras maximus, quam vitae fermentum consequat, mi magna aliquam ligula, ac hendrerit velit nibh ac mauris. Suspendisse ultricies dignissim enim, sit amet scelerisque ante tristique at. In tortor felis, tincidunt consequat purus eu, hendrerit pretium dui. Nunc volutpat, lacus ut placerat cursus, nulla lacus aliquet velit, id cursus odio nibh eget dolor. Vestibulum dictum congue ligula, a varius sem aliquet ut. Nunc commodo ligula nibh, sed condimentum dolor lacinia at. In euismod euismod luctus. Mauris ac arcu odio. Proin feugiat, ante et fermentum ullamcorper, eros massa consectetur est, eu congue metus erat eget neque. Suspendisse potenti. Sed sed volutpat nulla, id varius eros. Suspendisse potenti.

            Nullam maximus purus eget nunc tincidunt, quis accumsan ligula ullamcorper. Integer molestie erat id condimentum rutrum. Vestibulum et massa interdum, eleifend dui egestas, cursus mauris. Sed eu lobortis velit, nec ultricies augue. Ut ante risus, ultricies eu convallis at, consequat nec nisi. Curabitur rhoncus arcu turpis, rutrum fermentum magna mollis et. Proin ultrices aliquet rhoncus. Mauris luctus euismod orci sit amet pellentesque. Mauris mi metus, consectetur sed ipsum et, commodo convallis tellus. Nulla dui sapien, facilisis molestie sagittis quis, vehicula sit amet velit. Duis vel consequat nisl.
            
            Nam dapibus ultricies lorem, id aliquet lacus facilisis non. Fusce sagittis augue vitae gravida fringilla. Donec venenatis, metus non ultricies lobortis, augue arcu hendrerit enim, quis luctus nulla magna sed risus. Donec porta nunc vel mi consectetur finibus. Vestibulum fringilla ex justo, et pharetra nisi blandit at. In laoreet eleifend nisl in tincidunt. Pellentesque dui lectus, venenatis blandit mi eu, finibus scelerisque ligula. Donec vel tempor ante. Phasellus at ex quis dui hendrerit sollicitudin. Nulla sit amet euismod tortor. Nulla dignissim diam ultrices lacus ultricies, in cursus sapien malesuada.
            
            Morbi egestas at ligula vel egestas. Fusce vitae congue mi. Morbi facilisis tortor sit amet felis pulvinar, sit amet scelerisque sem finibus. Morbi venenatis odio nec augue hendrerit, sed lacinia libero pretium. Donec pulvinar, urna placerat rutrum ornare, mauris nulla molestie neque, ac pretium erat libero nec sem. Mauris dapibus leo sed nisi congue aliquam. Pellentesque egestas bibendum est, eget vehicula dolor. Sed id est lorem. Suspendisse a erat vehicula, euismod neque non, tincidunt ligula. Proin tincidunt non nulla non ultricies. Nunc blandit augue at sem elementum ullamcorper. Vestibulum vitae porttitor ipsum.
            
            Etiam sed nunc arcu. Cras at tempor orci. Donec rutrum, erat eget blandit eleifend, odio tellus lacinia orci, id venenatis ligula enim eu ante. Proin eget enim efficitur, mollis massa ut, iaculis sapien. Mauris maximus nunc nec imperdiet laoreet. Aenean facilisis vitae est vel sodales. Mauris semper eros sed enim dignissim aliquam. Vivamus non neque et magna pretium euismod. Fusce id eros rutrum neque vestibulum venenatis. Pellentesque at nulla ut ante convallis vestibulum at at urna. Nam dictum ex vitae diam fringilla tristique. Vivamus vulputate a quam at tincidunt. Proin at tortor pulvinar, scelerisque elit ut, tincidunt elit. Donec mattis tortor vitae semper pharetra.`
        }
    ],
    selectedItems: [],
    priorityClasses: new Map([['High', 'danger'], ['Medium', 'warning'], ['Low', 'success']]),
    sortableFields: [
        { title: 'priority', sortByProp: 'value' },
        { title: 'date', sortByProp: null }
    ]

}

storiesOf('NotificationList', module).add('to Storybook', () =>
  <NotificationList
    {...state}
    handleMarkAsArchived={this.handleMarkAsArchived}
    handleMarkAllItemsAsArchived={this.handleMarkAllItemsAsArchived}
    handleMarkAsRead={this.handleMarkAsRead}
    handleMarkAllItemsAsRead={this.handleMarkAllItemsAsRead} />);