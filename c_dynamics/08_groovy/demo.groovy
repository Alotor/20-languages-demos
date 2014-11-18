// Dynamic typing
def fillProperties(element) {
    element << [
        "timestamp" : System.nanoTime()
    ]
}

// Static typing
String generateName(Integer value) {
    return "Name$value"
}

def list = (1..10).inject([]) { acc, val->
    def element = [
        "name" : generateName(val)
    ]
    acc << fillProperties(element)
}

println list.join(", ")