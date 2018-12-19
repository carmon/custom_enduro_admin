({
	$greeting_type: 'text',
	greeting: 'asdasd',
    faq: {
        header: 'FAQ',
        $topics_templatitator: '@@topics_type',
        topics: [
            {
                title: 'Topic 0',
                $questions_templatitator: '@@questions_type',
                questions: [
                    {
                        title: 'Question 0',
                        content: 'Content of question 0'
                    },
                    {
                        title: 'Question 1',
                        content: 'Content of question 1'
                    },
                    {
                        title: 'Question 2',
                        content: 'Content of question 2'
                    },
                    {
                        title: 'Question 3',
                        content: 'Content of question 3'
                    },
                    {
                        title: 'Question 4',
                        content: 'Content of question 4'
                    },
                    {
                        title: 'Question 5',
                        content: 'Content of question 5'
                    },
                    {
                        $title_label: 'Pregunta',
                        $title_type: 'text',
                        title: 'HOLLA',
                        $content_type: 'textarea',
                        $content_label: 'Respuesta',
                        content: 'ASAS'
                    }
                ]
            },
            {
                title: 'Topic 1',
                $questions_templatitator: '@@questions_type',
                questions: [
                    {
                        title: 'Question 0',
                        content: 'Content of question 0'
                    },
                    {
                        title: 'Question 1',
                        content: 'Content of question 1'
                    },
                    {
                        title: 'Question 1',
                        content: 'Content of question 1'
                    }
                ]
            },
            {
                title: 'Test CMS',
                $questions_templatitator: '@@questions_type',
                questions: []
            },
            {
                title: 'Topic 3',
                $questions_templatitator: '@@questions_type',
                questions: [
                    {
                        title: 'Question 4',
                        content: 'Content of question 4'
                    },
                    {
                        title: 'Question 5',
                        content: 'Content of question 5'
                    }
                ]
            }
        ]
    }
})