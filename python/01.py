from langchain import OpenAI, SQLDatabase, SQLDatabaseChain
from langchain.prompts.prompt import PromptTemplate

# OPENAI_API_KEY='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'

_DEFAULT_TEMPLATE = """Given an input question, first create a syntactically correct {dialect} query to run, then look at the results of the query and return the answer.
Use the following format:
Question: "Question here"
SQLQuery: "SQL Query to run"
SQLResult: "Result of the SQLQuery"
Answer: "Final answer here"

Only use the following tables:
{table_info}

If someone asks for the table foobar, they really mean the employee table.

Question: {input}"""
PROMPT = PromptTemplate(
    input_variables=["input", "table_info", "dialect"], template=_DEFAULT_TEMPLATE
)


db = SQLDatabase.from_uri("mysql+pymysql://sql12612833:d9BjeeDy82@sql12.freemysqlhosting.net/sql12612833")

# def main(text):
#     user_input = input("Please enter some text: ", text)
#     print("You entered: ", user_input)
# if __name__ == "__main__":
#     main()
llm = OpenAI(openai_api_key= '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',temperature=0 )

db_chain = SQLDatabaseChain(llm=llm, database=db, verbose=True, prompt=PROMPT)
user_input = input("Please enter some text: ")
db_chain.run(user_input)
# db_chain.run("I want to add another thing in the database whose name is Utsav, description is, 'The most handsome person', who have 1000 calories and fat is 150, protein is 999.")
