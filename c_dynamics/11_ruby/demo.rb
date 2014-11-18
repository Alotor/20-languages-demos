class String
  alias_method :yell, :upcase

  def tell_something
    puts "#{self.yell}!! #{self.size}"
  end
end

"Hola mundo".tell_something

