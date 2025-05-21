export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 mx-auto flex items-center justify-center h-16">
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Abhishek Dasgupta. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
