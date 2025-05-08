from jinja2 import Environment, FileSystemLoader 

env = Environment(loader=FileSystemLoader("templates"))

template = env.get_template("page.html")

output = template.render()

with open("index.html", "w", encoding='utf-8') as f:
    f.write(output)

print('BUILD COMPLETE')
